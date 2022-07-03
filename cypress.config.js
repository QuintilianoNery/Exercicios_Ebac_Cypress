const { defineConfig } = require('cypress')

module.exports = defineConfig({
  websecurity: false,
  video: false,
  viewportWidth: 1600,
  viewportHeight: 900,
  chromeWebSecurity: false,
  projectId: 'fpi71k',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
