/// <reference types="cypress" />

import { ELEMENTOS_CARRINHO } from './elements';

class HomeCarrinho {
  validarUrlPaginaProduto() {
    cy.url().should('contain', '/carrinho/');
  }
  validarNomeProdutoNoCarrinho(produtoSelecionado) {
    cy.get(ELEMENTOS_CARRINHO.produtoSelecionado).should('be.visible');
    cy.get(ELEMENTOS_CARRINHO.produtoSelecionado).should('contain', produtoSelecionado);
  }
  validarQuantidadeProdutoNoCarrinho(quantidade) {
    cy.get(ELEMENTOS_CARRINHO.quantidadeProduto).should('be.visible');
    cy.get(ELEMENTOS_CARRINHO.quantidadeProduto).should('have.value', quantidade);
  }
  validarSubTotalProduto(quantidade, precoUnitario) {
    cy.get(ELEMENTOS_CARRINHO.subTotalProduto).should('be.visible');
    cy.get(ELEMENTOS_CARRINHO.subTotalProduto).should('contain', quantidade * precoUnitario);
  }
  validarSubTotalCarrinho(quantidade, precoUnitario) {
    cy.get(ELEMENTOS_CARRINHO.subTotalCarrinho).should('be.visible');
    cy.get(ELEMENTOS_CARRINHO.subTotalCarrinho).should('contain', quantidade * precoUnitario);
  }
  validarTotalCarrinho(quantidade, precoUnitario) {
    cy.get(ELEMENTOS_CARRINHO.totalCarrinho).should('be.visible');
    cy.get(ELEMENTOS_CARRINHO.totalCarrinho).should('contain', quantidade * precoUnitario);
  }
  clicarBotaoConcluirCompra() {
    cy.get(ELEMENTOS_CARRINHO.botaoConcluirCompra).should('be.visible');
    cy.get(ELEMENTOS_CARRINHO.botaoConcluirCompra).click();
  }
}

export default new HomeCarrinho();
