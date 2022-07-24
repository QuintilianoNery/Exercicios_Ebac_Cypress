/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json');

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
/* Calling a function in a module called `Login` */
        cy.login(perfil.usuarioEbac, perfil.senhaEbac)

    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {

    });
});