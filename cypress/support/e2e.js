// Arquivo de suporte do Cypress (carregado antes das specs)
Cypress.Commands.add('logSection', (msg) => {
  // eslint-disable-next-line no-console
  console.log(`[SECTION] ${msg}`);
});

// Você pode adicionar hooks globais aqui (before/after) se precisar
