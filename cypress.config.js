const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  websecurity: false,
  video: true,
  viewportWidth: 1600,
  viewportHeight: 900,
  chromeWebSecurity: false,
  projectId: 'fpi71k',
  titulo: "usuarioEBAC",
  usuarioEbac: "q@q.com",
  senhaEbac: "Ebac123456*",


  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: 'cypress/e2e/**/*.{js,json,jsx,ts,tsx}',
  },
  experimentalStudio: true


})
