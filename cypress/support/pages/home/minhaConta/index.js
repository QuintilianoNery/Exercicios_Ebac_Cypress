/// <reference types="cypress" />

import { ELEMENTOSMINHACONTA } from './../minhaConta/elements';

const Leite = require('leite')
const leite = new Leite()

class MinhaConta {
    digitarNomeDoUsuario(usuario) {
        cy.get(ELEMENTOSMINHACONTA.nomeDoUsuario).type(usuario, { log: false });
    }

    digitarSenhaDoUsuario(senha) {
        cy.get(ELEMENTOSMINHACONTA.senhaDoUsuario).type(senha, { log: false });
    }

    marcarCheckLembrarLogin() {
        cy.get(ELEMENTOSMINHACONTA.rememberme).click();
    }
    clicarBotaoLogin() {
        cy.get(ELEMENTOSMINHACONTA.buttonLogin).click();
    }

    validarUrlVisivel(url) {
        cy.url().should('be.equal', url)
    }

    validarMenuMinhaContaVisivel() {
        cy.get(ELEMENTOSMINHACONTA.menuMinhaConta).eq(3).should('be.visible').should('contain.text', 'Endereços');
    }

    validarMensagemErroLogin() {
        cy.get(ELEMENTOSMINHACONTA.erroLogin).should('be.visible');
    }

    clickMenuMinhaConta() {
        cy.get(ELEMENTOSMINHACONTA.menuMinhaConta).eq(3).click();
    }

    estaVisivelContentMyAccount() {
        cy.get(ELEMENTOSMINHACONTA.contentMyAccount).should('be.visible')
    }

    clicarEnderecoDeFaturamento() {
        cy.get(ELEMENTOSMINHACONTA.buttonEdit).eq(0).click()
    }

    digiteNome(nome) {
        cy.get(ELEMENTOSMINHACONTA.nome).clear().type(nome)

    }

    digiteSobrenome(sobrenome) {
        cy.get(ELEMENTOSMINHACONTA.sobrenome).clear().type(sobrenome)

    }

    digiteNomeEmpresa(nomeEmpresa) {
        cy.get(ELEMENTOSMINHACONTA.nomeEmpresa).clear().type(nomeEmpresa)

    }

    selecioneOPais(pais) {
        cy.get(ELEMENTOSMINHACONTA.selectPais).click().type(pais + '{enter}')

    }

    digiteEndereco(endereco1, endereco2) {
        cy.get(ELEMENTOSMINHACONTA.endereco).clear().type(endereco1)
        cy.get(ELEMENTOSMINHACONTA.endereco2).clear().type(endereco2)

    }

    digiteCidade(cidade) {
        cy.get(ELEMENTOSMINHACONTA.cidade).clear().type(cidade)

    }

    selecioneEstado(estado) {
        cy.get(ELEMENTOSMINHACONTA.selectEstado).click().type(estado + '{enter}')

    }

    digiteCep(cep) {
        cy.get(ELEMENTOSMINHACONTA.cep).clear().type(cep)

    }

    digiteTelefone(telefone) {
        cy.get(ELEMENTOSMINHACONTA.telefone).clear().type(telefone)

    }

    digiteEmail(email) {
        cy.get(ELEMENTOSMINHACONTA.email).clear().type(email)

    }

    cliqueBotaoSalvarEndereco() {
        cy.get(ELEMENTOSMINHACONTA.buttonSalvarEndereco).click();
    }

    alertaEndereçoAtualizado() {
        cy.get(ELEMENTOSMINHACONTA.alertEnderecoAtualizado).should('be.visible')
    }

}

export default new MinhaConta();