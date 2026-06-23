const { defineConfig } = require('cypress');

module.exports = defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',

  reporter: 'mocha-junit-reporter',
  reporterOptions: { mochaFile: 'cypress/results/results-[hash].xml', toConsole: true },

  e2e: {
   baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) { return config; },
  },

  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  retries: { runMode: 1, openMode: 0 },
});
