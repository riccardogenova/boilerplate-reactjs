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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
