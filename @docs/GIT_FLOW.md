<!-- @format -->

# Git flow

A **Task** corresponds to a branch.

Each Developer creates a new branch starting from the _develop_ branch, which will be of type _feat_ or _bugfix_, for example `feat/update-navbar` or `bugfix/footer-hidden`.

A branch can include one or more commits.
Depending on the developments made, the commits will have to be divided using the _type_ indicated below.

Each commit therefore corresponds to the development of a **Task**, which follows the following standard:

```

type: description

Refs #{idTask}

```

**WARNING: Only in the case of preparatory developments, it is possible to solve multiple tasks in the same branch**
In this case, indicate in _Refs_ the IDs of all the tasks involved.\*\*

```

type: description

Refs #{idTask1} #{idTask2} #{idTask3}

```

### Labels _type_

- `feat` New feature
- `fix` Fixed a bug
- `docs` Documentation modification
- `refactor` Code rewriting in production.
- `test` Adding tests or rewriting a test. It doesn't change the code in production.
- `chore` Changing configurations or the package manager. It doesn't change the code in production.

### Example

```

chore: update deprecated libraries

Refs #2342

```

Learn more about [Git Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

As soon as development is finished, a **Merge Request** is opened with respect to the _develop_ branch and the reference Team Lead is assigned as _reviewer_ who will carry out a review before carrying out the _merge_ on the branch through a _merge commit_ process

**In the event of conflicts during the Merge Request** it is the Developer's responsibility to resolve the conflicts by _rebase_ its own branch and perform a forced _push_ on the same branch. In this way the _Merge Request_ (already opened) will be automatically updated and made available for the merge.

**Failure to apply these standards automatically results in failure during the commit process**

**In the event of requests for changes during the Merge Request**, a fixup commit must be made indicating the hash of the reference commit.

Example

```

git commit --fixup 03cfcd8e1bad1f3ea50076d200fe0d13308a1ab8

```
