/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json');
import HomePage from './../support/pages/home'
import MinhaConta from './../support/pages/home/minhaConta';

describe.skip('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        // cy.login(perfil.usuarioEbac, perfil.senhaEbac) OU assim:
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuarioEbac, dados.senhaEbac)
        })
    });

    it('Dados da entrega', () => {
        HomePage.acessarPaginaMinhaConta();
        cy.login(perfil.usuarioEbac, perfil.senhaEbac)
        MinhaConta.validarUrlVisivel(perfil.baseUrl + perfil.uri.minhaConta)
        MinhaConta.validarMenuMinhaContaVisivel()
    });
});