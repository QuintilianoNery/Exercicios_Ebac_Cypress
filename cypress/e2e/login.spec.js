/// <reference types="Cypress" />

const perfil = require('../fixtures/perfil.json');
// Neste caso também podemos deixar as configurações em um arquivo Cypress.env.json

//Bloco de funcionalidades 
context('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit('/')

    });

    afterEach(() => {
        cy.screenshot();
        cy.vi
    });

    //Na parte de login, poderia ser criado um comando customizado para ser utilizado em outros testes
    it('Deve fazer login com sucessso - Usando arquivo de dados', () => {
        cy.get('i[class="icon-user-unfollow icons"]').click()
        cy.get('input[id="username"]').type(perfil.usuarioEbac, {log: false});
        cy.get('input[id="password"]').type(perfil.senhaEbac, {log: false});
        cy.get('input[id="rememberme"]').click();
        cy.get('input[name="login"]').click();
        cy.url()
            .should('be.equal', 'http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('span[class="hidden-xs"]')
            .should('have.text', 'Welcome teste_aluno20 !')
    });

    it.only('Deve fazer login com sucessso - Usando cypress.env.json', () => {
        cy.get('i[class="icon-user-unfollow icons"]').click()
        cy.get('input[id="username"]').type(Cypress.config('usuarioEbac'));
        cy.get('input[id="password"]').type(Cypress.config('senhaEbac'));
        cy.get('input[id="rememberme"]').click();
        cy.get('input[name="login"]').click();
        cy.url()
            .should('be.equal', 'http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('span[class="hidden-xs"]')
            .should('have.text', 'Welcome teste_aluno20 !')
    });


    it('Deve fazer login com sucessso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('i[class="icon-user-unfollow icons"]').click()
            cy.get('input[id="username"]').type(dados.usuarioEbac, {log: false});
            cy.get('input[id="password"]').type(dados.senhaEbac, {log: false});
            cy.get('input[id="rememberme"]').click();
            cy.get('input[name="login"]').click();
            cy.url()
                .should('be.equal', 'http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('span[class="hidden-xs"]')
                .should('have.text', 'Welcome teste_aluno20 !');
        })
    });


    it('Deve exibir uma mensagem de erro ao insserir um usuário inválido', () => {
        cy.get('i[class="icon-user-unfollow icons"]').click()
        cy.get('input[id="username"]').type('a@a.com', {log: false});
        cy.get('input[id="password"]').type('teste@teste.com', {log: false});
        cy.get('input[id="rememberme"]').click();
        cy.get('input[name="login"]').click();
        //O alerta deve ser exibido
        cy.get('div[class="woocommerce-notices-wrapper"]')
            .should('be.visible')
        cy.get('.woocommerce-error')
            .should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir uma mensagem de erro ao insserir senha inválida', () => {
        cy.get('i[class="icon-user-unfollow icons"]').click()
        cy.get('input[id="username"]').type('aluno_ebac@teste.com', {log: false});
        cy.get('input[id="password"]').type('senhaInvalida', {log: false});
        cy.get('input[id="rememberme"]').click();
        cy.get('input[name="login"]').click();
        //O alerta deve ser exibido
        cy.get('div[class="woocommerce-notices-wrapper"]')
            .should('be.visible')
        cy.get('.woocommerce-error')
            .should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    });
});