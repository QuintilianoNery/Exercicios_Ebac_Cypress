/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json');
// import HomePage from './../support/pages/home'
import MinhaConta from './../support/pages/home/minhaConta';

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        // cy.login(perfil.usuarioEbac, perfil.senhaEbac) OU assim:
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuarioEbac, dados.senhaEbac)
        })
    });

    it('Dados da entrega', () => {
        cy.step('Realizar login e validar se está napágina correta')
        MinhaConta.validarUrlVisivel(perfil.baseUrl + perfil.uri.minhaConta)
        MinhaConta.validarMenuMinhaContaVisivel()

        cy.step('Editar o endereço de faturamento e completar o cadastro')
    });
});