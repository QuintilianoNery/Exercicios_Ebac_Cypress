/// <reference types="cypress" />
const Leite = require('leite');
const leite = new Leite();

const nome = leite.pessoa.nome();
const sobrenome = leite.pessoa.nome();
const email = leite.pessoa.email();
const senha = `${nome}.${sobrenome}`;

const url = 'localhost:3000';
let token;
let idProduto;
before(function () {
    cy.buscarUsuario(0);
    cy.loginApiToken().then(tkn => { token = tkn });
    cy.buscarIdProdutos(0).then(id => { idProduto = id });
});

describe('API ServeRest', function () {
    context('URI produtos', function () {
        it('Buscar produtos cadastrados', function () {
            cy.request({
                method: 'GET',
                url: `${url}/produtos`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('produtos');
                expect(response.duration).to.be.lessThan(20);
            });
        });

        it('Cadastrar produto', function () {
            let produto = `Produto teste ${Math.floor(Math.random() * 10000000)}`

            cy.cadastrarProdutoApi('POST', this.token, produto, 470, "Mouse", 381)
                .then((response) => {
                    expect(response.status).to.eq(201);
                    expect(response.body.message).to.eq('Cadastro realizado com sucesso');
                });
        });

        it('Deve validar cadastro de produto já existente na base', function () {
            cy.cadastrarProdutoApi('POST', this.token, "Produto teste 1", 470, "Mouse", 381)
                .then((response) => {
                    expect(response.status).to.eq(400);
                    expect(response.body.message).to.eq("Já existe produto com esse nome");
                });
        });

        it('Deve editar produto', function () {
            let produto = `Produto teste ${Math.floor(Math.random() * 10000000)}`
            cy.editarProdutoApi('PUT', this.token, produto, 220, "Mouse", 381)

                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.message).to.eq("Registro alterado com sucesso");
                });
        });

    });
});
