/// <reference types="cypress" />
// var faker = require('faker-br');
// const quantidade = faker.random.number({ min: 1, max: 4 })
const quantidade = 4
const precoUnitario = 69
const produtoSelecionado = 'Abominable Hoodie - XS, Green'
const perfil = require('../fixtures/perfil.json');
import HomeProduto from '../support/pages/home/produtos/index.js'
import HomePage from '../support/pages/home/index.js'
import HomeCarrinho from '../support/pages/home/carrinho/index.js'
import HomeCheckout from '../support/pages/home/carrinho/checkout/index.js'
import MinhaConta from '../support/pages/home/minhaConta/index.js'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.section('Como cliente');
        cy.section('Acessar a loja Ebac Shop');
        cy.visit('/')

    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.step('Devo pesquisar o produto desejado');
        HomePage.clicarBotaoPesquisar();
        HomePage.digitarNomeProduto('abominable');
        HomePage.pesquisarProduto();

        cy.step('Dado que o usuário identifique o produto desejado');
        HomeProduto.clickButtonXS();
        HomeProduto.clickColorGreen();
        cy.step('Quando está na página do produto poderá escolher a cor, tamanho e quantidade');
        HomeProduto.insertQuantity(quantidade);
        cy.step('Então deve incluir o prduto desejado no carrinho');
        HomeProduto.addProductToCart();
        HomeProduto.findMiniCartItems(quantidade);
        HomeProduto.findMessageItems(quantidade);

        cy.step('Clicar no botão Ver carrinho');
        HomeProduto.clicarBotaoVerCarrinho();

        cy.step('Validar se o produto está no carrinho');
        HomeCarrinho.validarUrlPaginaProduto();
        HomeCarrinho.validarNomeProdutoNoCarrinho(produtoSelecionado);
        HomeCarrinho.validarQuantidadeProdutoNoCarrinho(quantidade);
        HomeCarrinho.validarSubTotalProduto(quantidade, precoUnitario);
        HomeCarrinho.validarSubTotalCarrinho(quantidade, precoUnitario);
        HomeCarrinho.validarTotalCarrinho(quantidade, precoUnitario);
        cy.step('Clicar no botão Concluir compra');
        HomeCarrinho.clicarBotaoConcluirCompra();

        cy.step('Validar se o usuário está na página de checkout');
        HomeCheckout.validarUrlPaginaCheckout();
        HomeCheckout.validarValorNoCarrinhoTopo(quantidade, precoUnitario);
        HomeCheckout.validarNomeProdutoNoCheckout(produtoSelecionado);
        HomeCheckout.validarValorTotalNoCheckout(quantidade, precoUnitario);

        cy.step('Preenchendo todas opções no checkout');
        cy.step('Realizar Login para finalizar a compra');

        HomeCheckout.clicarBotaoMostrarLogin();
        cy.login(perfil.usuarioEbac, perfil.senhaEbac)
        MinhaConta.clicarBotaoLoginCheckout();

        HomeCheckout.clicarPagamentoEntrega();
        HomeCheckout.validarDescricaoPagamentoEntrega();
        HomeCheckout.termosCondicoes();
        HomeCheckout.checkTermosCondicoes();

        cy.step('Clicar no botão Finalizar compra');

        HomeCheckout.clicarBotaoFinalizarCompra();
        HomeCheckout.validarOrderReceived();
        HomeCheckout.validarMensagemSucesso();
    });
})