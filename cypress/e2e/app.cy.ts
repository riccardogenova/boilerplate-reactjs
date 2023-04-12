/** @format */

describe('Homepage check', () => {
  it('check if change theme works', () => {
    cy.visit('http://localhost:3000/');
    cy.get('label').click();
  });

  it('check if login works', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Login' || 'Accedi').click();
    cy.get('p').contains('Edit');
  });
});
