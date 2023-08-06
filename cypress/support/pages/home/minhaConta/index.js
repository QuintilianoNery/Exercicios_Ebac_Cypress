/// <reference types="cypress" />

import { ELEMENTOS_MINHA_CONTA } from './../minhaConta/elements';

const Leite = require('leite');
const leite = new Leite();

class MinhaConta {
  digitarNomeDoUsuario(usuario) {
    cy.get(ELEMENTOS_MINHA_CONTA.nomeDoUsuario).type(usuario, { log: false });
  }

  digitarSenhaDoUsuario(senha) {
    cy.get(ELEMENTOS_MINHA_CONTA.senhaDoUsuario).type(senha, { log: false });
  }

  marcarCheckLembrarLogin() {
    cy.get(ELEMENTOS_MINHA_CONTA.rememberme).click();
  }
  clicarBotaoLogin() {
    cy.get(ELEMENTOS_MINHA_CONTA.inputLogin).click();
  }

  clicarBotaoLoginCheckout() {
    cy.get(ELEMENTOS_MINHA_CONTA.buttonLogin).click();
  }

  clicarLogoHome() {
    cy.get(ELEMENTOS_MINHA_CONTA.imgLogoHome).click();
  }

  validarUrlVisivel(url) {
    cy.url().should('be.equal', url);
  }

  validarMenuMinhaContaVisivel() {
    cy.get(ELEMENTOS_MINHA_CONTA.menuMinhaConta).eq(3).should('be.visible').should('contain.text', 'Endereços');
  }

  validarMensagemErroLogin() {
    cy.get(ELEMENTOS_MINHA_CONTA.erroLogin).should('be.visible');
  }

  clickMenuMinhaConta() {
    cy.get(ELEMENTOS_MINHA_CONTA.menuMinhaConta).eq(3).click();
  }

  estaVisivelContentMyAccount() {
    cy.get(ELEMENTOS_MINHA_CONTA.contentMyAccount).should('be.visible');
  }

  clicarEnderecoDeFaturamento() {
    cy.get(ELEMENTOS_MINHA_CONTA.buttonEdit).eq(0).click();
  }

  digiteNome(nome) {
    cy.get(ELEMENTOS_MINHA_CONTA.nome).clear().type(nome);

  }

  digiteSobrenome(sobrenome) {
    cy.get(ELEMENTOS_MINHA_CONTA.sobrenome).clear().type(sobrenome);

  }

  digiteNomeEmpresa(nomeEmpresa) {
    cy.get(ELEMENTOS_MINHA_CONTA.nomeEmpresa).clear().type(nomeEmpresa);

  }

  selecioneOPais(pais) {
    cy.get(ELEMENTOS_MINHA_CONTA.selectPais).click().type(`${pais  }{enter}`);

  }

  digiteEndereco(endereco1, endereco2) {
    cy.get(ELEMENTOS_MINHA_CONTA.endereco).clear().type(endereco1);
    cy.get(ELEMENTOS_MINHA_CONTA.endereco2).clear().type(endereco2);

  }

  digiteCidade(cidade) {
    cy.get(ELEMENTOS_MINHA_CONTA.cidade).clear().type(cidade);

  }

  selecioneEstado(estado) {
    cy.get(ELEMENTOS_MINHA_CONTA.selectEstado).click().type(`${estado  }{enter}`);

  }

  digiteCep(cep) {
    cy.get(ELEMENTOS_MINHA_CONTA.cep).clear().type(cep);

  }

  digiteTelefone(telefone) {
    cy.get(ELEMENTOS_MINHA_CONTA.telefone).clear().type(telefone);

  }

  digiteEmail(email) {
    cy.get(ELEMENTOS_MINHA_CONTA.email).clear().type(email);

  }

  cliqueBotaoSalvarEndereco() {
    cy.get(ELEMENTOS_MINHA_CONTA.buttonSalvarEndereco).click();
  }

  alertaEndereçoAtualizado() {
    cy.get(ELEMENTOS_MINHA_CONTA.alertEnderecoAtualizado).should('be.visible');
  }

}

export default new MinhaConta();
