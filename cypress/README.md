# Cypress Test Folder

This folder contains tests written using [Cypress](https://www.cypress.io/).

## Running Tests

To run the tests, first install the required dependencies:

````
yarn
````
Then, run the following command:

````
yarn cypress
````

This will run all tests in the cypress directory.

## Example Test

Here's an example test that checks that a button click navigates to the correct page:

```javascript
// example.spec.js
describe('Navigation', () => {
  it('should navigate to the about page on button click', () => {
    cy.visit('/');
    cy.get('button').click();
    cy.url().should('include', '/about');
  });
});
```

This test assumes that there is a button element on the home page that, when clicked, navigates to the about page.

You can modify this example test to test your own code.

Writing Tests

To write your own tests, create a new file in the cypress/integration directory that ends with .spec.js. Inside the file, use the various Cypress commands to interact with your application and make assertions about its behavior.

**For more information on how to write tests using Cypress, see the official documentation at [https://docs.cypress.io/guides/overview/why-cypress.](https://docs.cypress.io/guides/overview/why-cypress.)**