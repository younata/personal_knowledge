# Concourse

My preferred CI. Almost primarily for `fly execute`.

## The `fly` CLI

### Using `fly execute`

You can run a one-off job in concourse using the `execute` subcommand. You need to provide it with the task to run, and inputs for the task (as specified by the task yaml).

At the simplest, you could write a task that reads:

```yaml
---
platform: linux

image_resource:
  type: docker-image
  source:
    repository: alpine
    tag: latest

run:
  path: /bin/sh
  args:
    - -c
    - echo "hello world"
```

Save it to disk, and use it via `fly execute -c $SAVED_TASK_FILENAME`. This'll run the task in your concourse environment.

Of course, this type of example is only really useful for showing that this is possible. You can also pass any input to (and receive any output from) `fly execute` that a normal job in a pipeline would take. I commonly use this to verify that code works in CI without having to make WIP commits for CI to pick up on and test. I've also used it to hand off testing to a machine that's dedicated to testing (instead of bogging down my development machine, send a build off to CI to run and wait for the results).

To pass in additional inputs to `fly execute`, you can use `-i` flags to the command, with `$INPUT=$PATH` for all listed `$INPUTs` to the task. For example, the [cargo task, as listed in my `concourse_tasks` repository](https://github.com/younata/concourse_tasks/blob/master/tasks/cargo.yml), has 2 inputs: The list of concourse tasks (which, relevant to this task, contains the `cargo.sh` script that is specified in the task's `run.path` variable), and the code to operate on. To use this task on a bit of rust code, I'd run the command `fly execute -c path/to/concourse_tasks/cargo.yml -i concourse=path/to/concourse_tasks -i code=path/to/code`.

To simplify this process, I've written a shell script to handle this:

```zsh
#!/usr/bin/zsh
# Save file as `fly-run_task`

set -e

if [ $# -ne 2 ];
    echo "Usage: $0 task_name"
    echo "task_name should be the suffix-less name of the concourse task to run"
    exit 1
fi

TASK_NAME="$1"

CONCOURSE_TASKS_DIR=# path to my concourse_tasks checkout on disk

TASK_PATH="${CONCOURSE_TASKS_DIR}/tasks/${TASK_NAME}.yml"

if [ ! -f "${TASK_PATH}" ]; then
    echo "Error: ${TASK_PATH} is not a file.""
    echo "Usage: $0 task_name"
    echo "task_name should be the suffix-less name of the concourse task to run"
    exit 1
fi

fly execute -c "${TASK_PATH}" -i concourse="${CONCOURSE_TASKS_DIR}/tasks/" -i code=.
```

### Examining a build container

`fly` gives you shell access to a build container via the unfortunately named `hijack`, `intercept` or `i` subcommands.

There are several ways to do this:

- If you know the pipeline/job Id, and can guess which build type to examine, you can run `fly intercept -j $JOB_ID`, which will check for containers with that job id, and if there's any confusion about the exact container, it'll prompt you to pick a container.
- You can get the list of containers via the `containers` or `cs` subcommands (`fly cs`). This'll output table of available containers. Find the container you want, and pass the handle UUID to `fly intercept` with the `--handle=` (e.g. `fly intercept --handle=12345678-90ab-cdef-1234-567890abcdef`).
- From the table `fly cs` gives you, you can also pass in the build id for the container you want (`fly intercept -b $BUILD_ID`). This is less accurate than the handle UUID, so for any confusion, it'll prompt you for the exact container.

## Operating

### Concourse on Linode

Some notes on running Concourse from a linode box:

- You can run the `web` command and the `worker` command on the same machine. The web machine can be on a 1GB ram linode, it doesn't take that much resources.
- While doable on the 1GB ram plan, you should really run the workers on at least the 2GB ram plans. This is more for storage than anything else.
- Using a linode is a better plan long term over getting a NUC so long as you stay under the 16 GB plan. Depending on your usage, the other benefits (not having to care about hardware issues) might even extend this to that.

As with the other services I maintain, the setup is managed inside of an ansible playbook.

#### Issues

I discovered the hard way that using the 1GB "nanode" plan was not a good plan. The disk very quickly filled up, in addition to everything being slow as molasses. Once I migrated the machine to the 2GB plan, I ran into issues with the volume space not being resized (concourse creates a worker volume logical volume with `$TOTAL_DISK_SPACE - 10GB` of space), then further issues with the system thinking that a volumes which were deleted in fact weren't, etc.

##### Worker.beacon.forward-conn.failed-to-dial

See [this issue](https://github.com/concourse/concourse/issues/3493)

Remove `$CONCOURSE_WORK_DIR/garden-properties.json` before each time a worker starts.

##### Unable to resolve host error

I ran in to this issue when "upgrading" the host my concourse installation used from ubuntu 19.10 to 20.04. (Linode recommends you "upgrade" by creating a new instance at the desired OS, and copying over the necessary files - I just set everything up again because it was faster/easier to do it that way).

Sometimes, firewall or dns rules interfere with your workers. I resolved this by doing two things:

- Specifying the `CONCOURSE_GARDEN_DNS_SERVER` variable to a specific dns server (I use 1.1.1.1 so I don't have to rely on Google).
- If that doesn't work, then it's usually a firewall rule. If you use `fly intercept` on any of the offending gets, and you can't ping ANY IPs, then it's usually an overly restrictive firewall rule. You can adjust these with `ufw` on ubuntu (or `iptables` elsewhere).

##### Resizing the Worker Volume

See [this issue](https://github.com/concourse/concourse/issues/1751#issuecomment-371944140).

```bash
# On a machine with fly
fly -t $TARGET land-worker -w $WORKER_NAME

# On the worker
sudo systemctl stop concourse_worker

# Back to fly
fly -t $TARGET prune-worker -w $WORKER_NAME

# Back to the worker
sudo umount -f /opt/concourse/work_dir/volumes
sudo sync
sudo losetup -d /dev/loop0
sudo rm -rf /opt/concourse/work_dir/volumes.img
sudo reboot
```

Pruning the worker (which really only needs to happen before the reboot) tells concourse to ignore any volumes that may or may not exist. Invoking `land-worker` may or may not actually do things.

### Darwin Worker

I wrote something on this [a few years back](https://blog.rachelbrindle.com/2016/11/08/concourse-mac-worker/). Which is, of course, out of date (at least, in regard to houdini).

Here's my current launchagent (`~/Library/LaunchAgents/com.rachelbrindle.concourse.worker.plist`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>AbandonProcessGroup</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>Label</key>
    <string>com.rachelbrindle.concourse.worker</string>
    <key>Nice</key>
    <integer>0</integer>
    <key>ProgramArguments</key>
    <array>
    <string>/Users/you/concourse/worker.sh</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>StandardErrorPath</key>
    <string>/usr/local/var/log/concourse_darwin_worker.log</string>
</dict>
</plist>
```

And the corresponding worker.sh:

```sh
#!/bin/sh -l

cd /Users/you/concourse
/usr/local/bin/concourse worker \
    --work-dir /Users/you/concourse/darwin_work_dir \
    --tsa-host $CONCOURSE_HOST:2222 \
    --tsa-public-key /Users/you/concourse/keys/web/tsa_host_key.pub \
    --tsa-worker-private-key /Users/you/concourse/keys/worker/worker_key
```
