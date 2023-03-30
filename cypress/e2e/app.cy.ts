/** @format */

describe('Homepage check', () => {
  it('check if the text is present', () => {
    cy.visit('http://localhost:3000/');
    cy.get('p').contains('Edit');
  });

  it('check if the href works', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="https://reactjs.org"]').click();
  });
});
