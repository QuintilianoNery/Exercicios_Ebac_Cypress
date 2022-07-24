
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('input[id="username"]').type(usuario, { log: false });
    cy.get('input[id="password"]').type(senha, { log: false });
    cy.get('input[id="rememberme"]').click();
    cy.get('input[name="login"]').click();
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobreNome) => {
    cy.get('i[class="icon-user-unfollow icons"]').click()
    cy.get('input[id=reg_email]').type(email)
    cy.get('input[id=reg_password]').type(senha)
    cy.get('input[value=Register]').click()
    //Ajustar
    cy.visit('/minha-conta/edit-account/')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').clock()
    cy.get('input[id="account_first_name"]').type(nome)
    cy.get('input[id="account_last_name"]').type(sobreNome)
    cy.get('button[name="save_account_details"]').click()
    cy.get('div[class="woocommerce-message"]')
        .should('contain', 'Detalhes da conta modificados com sucesso.')
})