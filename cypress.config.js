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
  usuarioEbac: "aluno_ebac@teste.com",
  senhaEbac: "teste@teste.com",


  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      allureWriter(on, config)
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },


})
