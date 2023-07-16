/// <reference types="cypress" />

import { ELEMENTOS_CHECKOUT } from './elements';

class HomeCheckout {
    validarUrlPaginaCheckout() {
        cy.url().should('contain', '/checkout/');
    }

    validarValorNoCarrinhoTopo(quantidade, precoUnitario) {
        cy.get(ELEMENTOS_CHECKOUT.valorNoCarrinhoTopo).should('be.visible');
        cy.get(ELEMENTOS_CHECKOUT.valorNoCarrinhoTopo).should('contain', quantidade * precoUnitario);
    }

    validarNomeProdutoNoCheckout(produtoSelecionado) {
        cy.get(ELEMENTOS_CHECKOUT.checkoutNomeProduto).should('be.visible');
        cy.get(ELEMENTOS_CHECKOUT.checkoutNomeProduto).should('contain', produtoSelecionado);
    }

    validarValorTotalNoCheckout(quantidade, precoUnitario) {
        cy.get(ELEMENTOS_CHECKOUT.checkoutTotal).should('be.visible');
        cy.get(ELEMENTOS_CHECKOUT.checkoutTotal).should('contain', quantidade * precoUnitario);
    }

    clicarPagamentoEntrega() {
        cy.get(ELEMENTOS_CHECKOUT.pagamentoEntrega).click();
    }

    validarDescricaoPagamentoEntrega() {
        cy.get(ELEMENTOS_CHECKOUT.descricaoPagamentoEntrega).should('be.visible');
    }

    termosCondicoes() {
        cy.get(ELEMENTOS_CHECKOUT.termosCondicoes).should('be.visible');
        cy.get(ELEMENTOS_CHECKOUT.termosCondicoes).should('contain.text', 'Li e concordo com o(s) termos e condições do site');
    }

    checkTermosCondicoes() {
        cy.get(ELEMENTOS_CHECKOUT.checkTermosCondicoes).click();
    }

    clicarBotaoFinalizarCompra() {
        cy.get(ELEMENTOS_CHECKOUT.finalizarCompra).click();
    }

    validarMensagemSucesso() {
        cy.get(ELEMENTOS_CHECKOUT.mensagemSucesso).should('be.visible');
        cy.get(ELEMENTOS_CHECKOUT.mensagemSucesso).should('contain.text', 'Obrigado. Seu pedido foi recebido.');
    }

}

export default new HomeCheckout();