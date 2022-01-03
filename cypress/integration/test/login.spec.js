/// <reference types="Cypress" />

//Bloco de funcionalidades 
context('Funcionalidade Login', () => {
    it.only('Deve fazer login com sucessso', () => {
        cy.visit('/')
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
    it('Deve exibir uma mensagem de erro ao insserir um usuário e senha inválido', () => {
        cy.visit('/')
        cy.get('i[class="icon-user-unfollow icons"]').click()
        cy.get('input[id="username"]').type('email@invalido.com.br');
        cy.get('input[id="password"]').type('senhaInvalida');
        cy.get('input[id="rememberme"]').click();
        cy.get('input[name="login"]').click();
        //O alerta deve ser exibido
        cy.get('div[class="woocommerce-notices-wrapper"]')
            .should('be.visible')
    });

});