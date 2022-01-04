/// <reference types="Cypress" />

//Bloco de funcionalidades 
context('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login com sucessso', () => {
        cy.get('i[class="icon-user-unfollow icons"]').click()
        cy.get('input[id="username"]').type(Cypress.env('usuarioEbac'));
        cy.get('input[id="password"]').type(Cypress.env('senhaEbac'));
        cy.get('input[id="rememberme"]').click();
        cy.get('input[name="login"]').click();
        cy.url()
            .should('be.equal', 'http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('span[class="hidden-xs"]')
            .should('have.text', 'Welcome aluno_ebac !')
    });
    it('Deve exibir uma mensagem de erro ao insserir um usuário inválido', () => {
        cy.get('i[class="icon-user-unfollow icons"]').click()
        cy.get('input[id="username"]').type('a@a.com');
        cy.get('input[id="password"]').type('teste@teste.com');
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
        cy.get('input[id="username"]').type('aluno_ebac@teste.com');
        cy.get('input[id="password"]').type('senhaInvalida');
        cy.get('input[id="rememberme"]').click();
        cy.get('input[name="login"]').click();
        //O alerta deve ser exibido
        cy.get('div[class="woocommerce-notices-wrapper"]')
            .should('be.visible')
        cy.get('.woocommerce-error')
            .should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    });

});