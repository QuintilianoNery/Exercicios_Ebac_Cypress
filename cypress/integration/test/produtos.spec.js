/// <reference types="cypress" />

var faker = require('faker-br');
const quantidade = faker.random.number({ min: 1, max: 84 })


context('Funcionalidade Página de produtos', () => {
    beforeEach(() => {
        cy.visit('/produtos')
    });
    afterEach(() => {
        cy.screenshot();
    });

    //uma das regras de boas práticas utilizando o Cypress,seria não criar pequenos testes com  poucas validações, por ser custoso para ao processo de CI
    //Então vou continuar o teste de inclusão do produto ao carrinho nesme mesmo teste.
    //em uma futura refatoração, utilizar comandos customizados para diminuir a repetição de código
    // E unir alguns fluxos de testes em um mesmo teste.
    it('Deve selecionar um produto da lista e adiciona-lo no carrinho', () => {
        cy.get('div[class="product-block grid"]')
            //.first()
            //.last()
            //.contains('texto aqui')
            .eq(1)
            .click()

        cy.get('.button-variable-item-L')
            .click()
        cy.get('.button-variable-item-Black')
            .click()

        cy.get('input[name=quantity]')
            .clear()
            .type(quantidade)

        cy.get('button[class="single_add_to_cart_button button alt"]')
            .click();

        cy.get('span[class="mini-cart-items"]')
            .should('contain', `${quantidade}`)

        cy.get('div[class=woocommerce-message]')
            .should('contain', ` ${quantidade} × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.	`)
    });




});