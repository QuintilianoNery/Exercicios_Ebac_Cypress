/// <reference types="cypress" />

import { ELEMENTOS_PRODUTOS } from './elements';

class HomeProduto {
  clickButtonTamanho() {
    cy.get(ELEMENTOS_PRODUTOS.buttonItemXS).click();
  }

  clickColor() {
    cy.get(ELEMENTOS_PRODUTOS.colorGreen).click();
  }

  insertQuantity(quantidade) {
    cy.get(ELEMENTOS_PRODUTOS.quantityItems).clear().type(quantidade);
  }

  addProductToCart() {
    cy.get(ELEMENTOS_PRODUTOS.buttonAddProductToCart).click();
  }

  findMiniCartItems(quantidade) {
    cy.get(ELEMENTOS_PRODUTOS.spanMiniCartItems)
      .should('contain', `${quantidade}`);
  }

  findMessageItems(quantidade) {
    cy.get(ELEMENTOS_PRODUTOS.messageItems)
      .should('contain', ` ${quantidade} × “Abominable Hoodie” foram adicionados no seu carrinho.`);
  }
  validarMensagemProdutoNoCarrinho(produto) {
    cy.get(ELEMENTOS_PRODUTOS.messageItems)
      .should('contain', ` ${produto} × “Abominable Hoodie” foram adicionados no seu carrinho.`);
  }

  clicarBotaoVerCarrinho() {
    cy.get(ELEMENTOS_PRODUTOS.buttonViewCart).click();
  }
}

export default new HomeProduto();
