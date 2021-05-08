# Git

Decentralized version control system.

## Searching for when a given string was introduced

When you want to find out which commit first referenced a given string:

```sh
git log -S <string to search for> --source --all
```

See [this stackoverflow answer](https://stackoverflow.com/questions/5816134/how-to-find-the-git-commit-that-introduced-a-string-in-any-branch).

## Reverting commits without creating a new one

This is useful when you want to revert a set of commits, but also when you want to change them before committing again.

```sh
git revert -n <commit hashes to revert>
```

See [the git documentation](https://www.git-scm.com/docs/git-revert#Documentation/git-revert.txt---no-commit)

## Deleting multiple local branches

`git branch -d $BRANCH_NAME` will delete a local branch IFF it's been merged with the upstream branch (or remote). If you pass in `--force`, then it'll delete it regardless. `git branch -D $BRANCH_NAME` is a shorthand for `git branch -d --force $BRANCH_NAME`.

`git branch -D prefix*` doesn't work (git won't do the name completion for you). Instead, something like this will work:

```sh
git branch | grep "$PREFIX_STRING" | xargs git branch -D
```

## Rebasing a branch onto another one.

Say you branch off `my_work` from `develop`. But you later find out you need to merge it into `master`. How do you merge only the commits from `my_work` into `master` without including other commits from `develop`?

As with most things in software, [stackoverflow has the answer](https://stackoverflow.com/a/10853956).

```sh
git checkout my_work
git rebase --onto master develop my_work
```

That is, you rebase onto the target branch, from the original branch point, with the branch you want to move.

## Submodules

Submodule are a neat, basic way to manage dependencies.

Adding one is easy

```sh
git submodule add SUBMODULE_URL
```

When you're not the one who added it, the command to pull down the submodules is less obvious.

```sh
git submodule update --init --recursive
```

### Removing a submodule

Removing a submodule is less obvious, and, as of git 1.8.5, involves a 3-part process:

```sh
git submodule deinit -f -- $MODULE
rm -rf .git/modules/$MODULE
git rm -f $MODULE
```

Thanks to [this stackoverflow answer](https://stackoverflow.com/a/16162000)

## Generating and Applying Patches

Patch files are files (duh) describing changes between one version to another. They can be easily created by piping `git diff $SOURCE_COMMIT $TARGET_COMMIT` to a file. Or, for changes from HEAD to whatever's being worked on, a simple `git diff`.

Once you have the patch, you can then apply it with `git apply $PATH_TO_FILE`, so, for example:

```sh
git diff > change.patch
git co .
git apply change.patch
```

Which is a less elegant version of `git stash`.

## Stop tracking changes to a file

Use `git rm --cached` on the file(s), and add them to the ignore patterns.
