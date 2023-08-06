/// <reference types="cypress" />

// var faker = require('faker-br');
const quantidade = 3;
import HomeProduto from '../../support/pages/home/produtos';

context('Funcionalidade Página de produtos', () => {
  //Devido a falha ao localizar o produto, vou fazer um cy.visit para entrar no produto
  beforeEach(() => {
    cy.visit('/product/abominable-hoodie/');
  });

  //uma das regras de boas práticas utilizando o Cypress,seria não criar pequenos testes com  poucas validações, por ser custoso para ao processo de CI
  //Então vou continuar o teste de inclusão do produto ao carrinho nesme mesmo teste.
  //em uma futura refatoração, utilizar comandos customizados para diminuir a repetição de código
  // E unir alguns fluxos de testes em um mesmo teste.
  it('Deve selecionar um produto da lista e adiciona-lo no carrinho', () => {

    cy.section('Incluir produto no carrinho');
    cy.step('Dado que o usuário identifica o produto desejado');
    HomeProduto.clickButtonXS();
    HomeProduto.clickColorGreen();
    cy.step('Quando está na página do produto poderá escolher a cor, tamanho e quantidade');
    HomeProduto.insertQuantity(quantidade);
    cy.step('Então deve incluir o prduto desejado no carrinho');
    HomeProduto.addProductToCart();
    HomeProduto.findMiniCartItems(quantidade);
    HomeProduto.findMessageItems(quantidade);

  });

});
