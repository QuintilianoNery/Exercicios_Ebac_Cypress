/// <reference types="cypress" />

const perfil = require('../../fixtures/perfil.json');
import HomeProduto from '../../support/pages/home/produtos/index.js'
import HomePage from '../../support/pages/home/index.js'
import HomeCarrinho from '../../support/pages/home/carrinho/index.js'
import HomeCheckout from '../../support/pages/home/carrinho/checkout/index.js'

const produtoInfo = {
    nome: 'abominable',
    cor: 'Green',
    tamanho: 'XS',
    quantidade: 4,
    precoUnitario: 69,
    produtoSelecionado: 'Abominable Hoodie - XS, Green',
    perfil: require('../fixtures/perfil.json'),
};
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.section('Como cliente');
        cy.section('Acessar a loja Ebac Shop');
        cy.visit('/');

        cy.step('Realizar Login para finalizar a compra');
        HomePage.acessarPaginaMinhaConta();
        cy.LoginCompras(perfil.usuarioEbac, perfil.senhaEbac)
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.adicionarProdutoAoCarrinho(produtoInfo);
        HomeProduto.findMiniCartItems(produtoInfo.quantidade);
        HomeProduto.findMessageItems(produtoInfo.quantidade);

        cy.step('Clicar no botão Ver carrinho');
        HomeProduto.clicarBotaoVerCarrinho();
        cy.validarProdutoNoCarrinho(produtoInfo);

        cy.step('Clicar no botão Concluir compra');
        HomeCarrinho.clicarBotaoConcluirCompra();

        cy.step('Validar se o usuário está na página de checkout');
        HomeCheckout.validarUrlPaginaCheckout();
        HomeCheckout.validarValorNoCarrinhoTopo(produtoInfo.quantidade, produtoInfo.precoUnitario);
        HomeCheckout.validarNomeProdutoNoCheckout(produtoInfo.produtoSelecionado);
        HomeCheckout.validarValorTotalNoCheckout(produtoInfo.quantidade, produtoInfo.precoUnitario);

        cy.step('Preenchendo todas opções no checkout');
        HomeCheckout.clicarPagamentoEntrega();
        HomeCheckout.validarDescricaoPagamentoEntrega();
        HomeCheckout.termosCondicoes();
        HomeCheckout.checkTermosCondicoes();

        cy.step('Clicar no botão Finalizar compra');
        HomeCheckout.clicarBotaoFinalizarCompra();
        HomeCheckout.validarMensagemSucesso();
    });
});