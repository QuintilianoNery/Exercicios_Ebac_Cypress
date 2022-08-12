/// <reference types="cypress" />

//Faker-br
var faker = require('faker-br');

//Criação de constantes para os dados do cadastro
const nome = faker.name.firstName()
const senha = faker.internet.password()
const sobreNome = faker.name.lastName()
const numeroAleatorio = faker.random.number({ min: 1, max: 99 })
const email = faker.internet.email(nome)
const emailAleatorio = ((numeroAleatorio) + (email))
const senhaAleatoria = ((numeroAleatorio) + (senha))

context('Funcionalidade Pré Cadasstro', () => {
    //Executar antes de cada teste
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot();
    });
    //Teste de pré cadastro
    it('Deve completar o pré cadastro com sucessso', () => {
        cy.get('i[class="icon-user-unfollow icons"]').click()

        cy.get('input[id=reg_email]').type((numeroAleatorio) + (email))
        cy.get('input[id=reg_password]').type((numeroAleatorio) + (senha))
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

    //Teste usando comandos personalizados para pré-cadastro
    it('Deve completar o pré-cadastro com sucesso usando Comandos customizados', () => {
        cy.preCadastro(emailAleatorio, senhaAleatoria, nome, sobreNome)

    });

})