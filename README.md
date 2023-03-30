# Index

- [Naming Convention](@docs/NAMING_CONVENTION.md)
- [Git Flow](@docs/GIT_FLOW.md)

### Tools used

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

# introduction

The application is developed in react using the [typescript](https://www.typescriptlang.org). template.

The use of the [VSCode](https://code.visualstudio.com/)\_ editor is suggested

Application _state_ is managed using [redux](https://redux.js.org/introduction/getting-started)

The code is validated with [eslint](https://eslint.org/) and [prettier](https://prettier.io/) at commit time, using [husky](https://github.com/typicode/husky). The format of the commit is validated using [commitlint](https://github.com/conventional-changelog/commitlint) (see below).

## Stile & CSS

Only [@emotion/react](https://emotion.sh/docs/@emotion/react) is used for the design

## Code formatting

Formatting and code checks are intended to ensure the highest quality and consistency within the codebase.

**During the commit phase, a script is automatically executed which formats the entire codebase according to the Prettier configuration defined within the code, subsequently in case there are typescript errors or the commit does not follow the defined formatting standard ( see [Git Flow](@docs/GIT_FLOW.md)) an additional script will deny the commit**

### Configuration VSCode

1. Install `Prettier` extension
2. Go to to `File -> Settings` and search `theme`
3. Click on `Edit in settings.json`
4. Add this entry on opened file `settings.json` and save it

```
  "editor.tabSize": 2,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
    "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
```

## Work flow

- The package manager used is YARN **- npm is not used -**
- Installing a new library requires permission from the Team Lead.
- Changing formatting rules requires permission from the Team Lead.
- Updating a library requires permission from the Team Lead.

# Naming conventions

To facilitate development, it is important that component and/or function names follow the following rules of [Naming Convention](@docs/NAMING_CONVENTION.md)

## Quick start

1.  Make sure that you have Node.js and yarn installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/bitRocket-dev/reactJS-app-boilerplate.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `yarn` in order to install dependencies.<br />
    _At this point you can run `yarn start` to see the example app at `http://localhost:3000`._

Now you're ready to rumble!
