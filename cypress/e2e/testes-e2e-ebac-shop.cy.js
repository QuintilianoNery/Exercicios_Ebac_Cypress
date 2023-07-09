/// <reference types="cypress" />
var faker = require('faker-br');
// const quantidade = faker.random.number({ min: 1, max: 4 })
const quantidade = 4
import HomeProduto from '../support/pages/home/produtos/index.js'
import HomePage from '../support/pages/home/index.js'



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        HomePage.clicarBotaoPesquisar()
        HomePage.digitarNomeProduto('abominable')
        HomePage.pesquisarProduto()

        cy.section('Incluir produto no carrinho')
        cy.step('Dado que o usuário identifica o produto desejado')
        HomeProduto.clickButtonXS()
        HomeProduto.clickColorGreen()
        cy.step('Quando está na página do produto poderá escolher a cor, tamanho e quantidade')
        HomeProduto.insertQuantity(quantidade)
        cy.step('Então deve incluir o prduto desejado no carrinho')
        HomeProduto.addProductToCart()
        HomeProduto.findMiniCartItems(quantidade)
        HomeProduto.findMessageItems(quantidade)

        HomeProduto.clicarBotaoComprar()
        // HomePage.validarMensagemProdutoNoCarrinho()

    });

})