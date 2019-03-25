# How This is Setup

This is setup using [mdBook](https://github.com/rust-lang-nursery/mdBook). It's hosted as a private repository on github. I set up a pipeline in [concourse](https://concourse-ci.org) to build, check that things work, and then push new versions once things are set up.

## Repository Layout

This is a simple mdbook, the markdown files are under `src/`, and `SUMMARY.md` reflects the directory structure of `src/`. I do eventually want to write tooling to autogenerate `SUMMARY.md` for me.

## Pipeline

The pipeline[^pipeline] is relatively simple:

- Check for new pushes to master
- Build the book (using [this mdbook docker image](https://hub.docker.com/r/hrektts/mdbook))
- Test that the generated book isn't broken (mostly verify the links work) using [html-proofer](https://github.com/gjtorikian/html-proofer), via [this docker image](https://hub.docker.com/r/18fgsa/html-proofer).
- rsync the updated book to the server hosting the contents.

## Server Setup

The server hosting this is a [linode](https://linode.com) VPS. It gets deployed to/managed via an ansible playbook. The current setup is pretty bad/full of bad patterns, but needless to say that playbook manages setting up nginx, getting letsencrypt set up, and configuring nginx to serve the static files for this repository.

On Sol, the repository containing this playbook is located at `~/workspace/Apps`.

[^pipeline]: The pipeline definition looks like this:

```yaml
resource_types:
- name: rsync-resource
  type: docker-image
  source:
    repository: mrsixw/concourse-rsync-resource
    tag: latest

resources:
  # Knowledge Repository
  - name: knowledge_source
    type: git
    source:
      uri: {{knowledge_repository}}
      private_key: {{GITHUB_PRIVATE_KEY}}
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
      - task: mdbook
        file: tasks/tasks/mdbook.yml
        input_mapping: 
          code: knowledge_source
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