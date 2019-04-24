# Git

Decentalized version control system.

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
