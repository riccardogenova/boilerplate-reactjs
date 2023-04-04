Jest is a JavaScript testing framework developed by Facebook. Jest is easy to use and includes everything you need to write tests in JavaScript.

## Installation
To install Jest, run the following command:

## css

``` yarn add --save-dev jest ```

# Configuration
To configure Jest, create a jest.config.js file in your project directory and set the desired configuration options. For example, to set up the test folder:

## javascript

```
module.exports = {
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
}; 
```

## bash

``` yarn test ```
This command will run all tests in the test folder (di default __tests__), con l'estensione .test.js o .spec.js.

## Documentation
For more information about Jest, check out the official documentation at [jestjs.io](https://www.jestjs.io).