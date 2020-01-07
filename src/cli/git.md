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
