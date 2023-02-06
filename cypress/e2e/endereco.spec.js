/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json');

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        // cy.login(perfil.usuarioEbac, perfil.senhaEbac) OU assim:
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuarioEbac, dados.senhaEbac)
        })
    });
});