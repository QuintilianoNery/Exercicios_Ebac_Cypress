/// <reference types="cypress" />

import { ELEMENTOSPRODUTOS } from './elements';

class HomeProduto {
    clickButtonXS() {
        cy.get(ELEMENTOSPRODUTOS.buttonItemXS).click()
    }

    clickColorGreen() {
        cy.get(ELEMENTOSPRODUTOS.colorGreen).click()
    }

    insertQuantity(quantidade) {
        cy.get(ELEMENTOSPRODUTOS.quantityItems).clear().type(quantidade)
    }

    addProductToCart() {
        cy.get(ELEMENTOSPRODUTOS.buttonAddProductToCart).click();
    }

    findMiniCartItems(quantidade) {
        cy.get(ELEMENTOSPRODUTOS.spanMiniCartItems)
            .should('contain', `${quantidade}`)
    }

    findMessageItems(quantidade) {
        cy.get(ELEMENTOSPRODUTOS.messageItems)
            .should('contain', ` ${quantidade} × “Abominable Hoodie” foram adicionados no seu carrinho.`)
    }
}

export default new HomeProduto();