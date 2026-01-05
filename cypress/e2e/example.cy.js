// Spec de exemplo para validar o setup no CI

describe('Exemplo CI', () => {
  it('deve visitar a página baseUrl e possuir um título', () => {
    cy.visit('/');
    cy.title().should('be.a', 'string');
  });
});
