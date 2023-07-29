/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json');

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

    //Teste usando comandos personalizados para pré-cadastro
    it('Deve completar o pré-cadastro com sucesso usando Comandos customizados', () => {
        cy.preCadastro(emailAleatorio, senhaAleatoria, nome, sobreNome)
    });

})