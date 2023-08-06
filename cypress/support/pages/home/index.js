/// <reference types="cypress" />

import { ELEMENTOS_HOME } from './elements';

class HomePage {
  acessarPaginaMinhaConta() {
    cy.get(ELEMENTOS_HOME.iconUser).click();
  }
  clicarBotaoPesquisar() {
    cy.get(ELEMENTOS_HOME.botaoPesquisarProduto).eq(1).click();
  }
  digitarNomeProduto(produto) {
    cy.get(ELEMENTOS_HOME.inputNomeProduto).eq(1).click();
    cy.get(ELEMENTOS_HOME.inputNomeProduto).eq(1).type(produto);
  }
  pesquisarProduto() {
    cy.get(ELEMENTOS_HOME.botaoPesquisar).eq(2).click();
  }

}

export default new HomePage();
