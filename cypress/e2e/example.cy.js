describe('Exemplo CI', () => {
  it('deve acessar o site do Cypress', () => {
    cy.visit('https://example.cypress.io')

    cy.title().should('contain', 'Cypress')
  })
})