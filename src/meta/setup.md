# How This is Setup

This is setup using [mdBook](https://github.com/rust-lang-nursery/mdBook). It's hosted as a [repository on github](https://github.com/younata/personal_knowledge). I set up a pipeline in [concourse](https://concourse-ci.org) to build, check that things work, and then push new versions once things are set up.

## Repository Layout

This is a simple mdbook, the actual content files is under `src/`. `SUMMARY.md` is missing, because I have [tooling to automatically generate one automatically](https://github.com/younata/mdbook-generate-summary).

## Pipeline

The pipeline[^pipeline] is relatively simple:

- Check for new pushes to master
- Generate a SUMMARY.md for the book.
- Build the book (using [this mdbook docker image](https://hub.docker.com/r/hrektts/mdbook))
- Test that the generated book isn't broken (mostly verify the links work) using [html-proofer](https://github.com/gjtorikian/html-proofer), via [this docker image](https://hub.docker.com/r/18fgsa/html-proofer).
- rsync the updated book to the server hosting the contents.

## Server Setup

The server hosting this is a [linode](https://linode.com) VPS. It gets deployed to/managed via an ansible playbook. The current setup is pretty bad/full of bad patterns, but needless to say that playbook manages setting up nginx, getting letsencrypt set up, and configuring nginx to serve the static files for this repository.

On Sol, the repository containing this playbook is located at `~/workspace/Apps`.

## Offline/Development Setup

For making changes and doing a local preview (or just simply running locally), the following setup is recommended/required:

- Rust/Cargo: Install [rustup](https://rustup.rs)
- mdbook-generate-summary: `cargo install mdbook-generate-summary` will get you an out-of-date version. The CI uses a dockerimage for this, but that docker image is not yet set up for local usage. The "best" way to get an up-to-date version is to download the source, and run `cargo install --path .`. Which isn't the best way to distribute software. 🤷🏻‍♀️
- mdbook: `cargo install mdbook`

Running:

`mdbook-generate-summary` will build a SUMMARY.md file for you. This way, you don't have to maintain one.

`mdbook watch` will build your sources, watch for any changes to the `src/` directory, and serve up the book on localhost:3000.

I do this for my work repository, which I want to keep separate from my personal stuff.

[^pipeline]: The pipeline definition looks like this:

```yaml
resource_types:
- name: rsync-resource
  type: docker-image
  source:
    repository: mrsixw/concourse-rsync-resource
    tag: latest

resources:
  # Knowledge Wiki
  - name: knowledge_source
    type: git
    source:
      uri: https:/github.com/younata/personal_knowledge.git
      branch: master
  # Task info
  - name: tasks
    type: git
    source:
      uri: https://github.com/younata/concourse_tasks.git
      branch: master
  # Book Server
  - name: book_server
    type: rsync-resource
    source:
      server: {{book_server}}
      base_dir: /usr/local/var/www/knowledge/
      user: you
      disable_version_path: true
      private_key: {{BOOK_SERVER_PRIVATE_KEY}}
    
jobs:
  - name: build_knowledge
    plan:
      - aggregate:
        - get: knowledge_source
          trigger: true
        - get: tasks
      - task: generate_summary
        config:
          platform: linux
          image_resource:
            type: docker-image
            source:
              repository: younata/mdbook-generate-summary
              tag: latest
          run:
            path: sh
            args:
            - -c
            - |
              #!/bin/bash
              cd knowledge_source
              mdbook-generate-summary src/ -v
              cp -r * ../generated/
            dir: ""
          inputs:
          - name: knowledge_source
          outputs:
          - name: generated
      - task: mdbook
        file: tasks/tasks/mdbook.yml
        input_mapping: 
          code: generated
          concourse: tasks
        output_mapping:
          book: book
      - task: test
        file: tasks/tasks/html_proofer.yml
        input_mapping:
          code: book
          concourse: tasks
        params: {DOMAIN: "https://knowledge.rachelbrindle.com"}
      - put: book_server
        params: {sync_dir: book}
```
