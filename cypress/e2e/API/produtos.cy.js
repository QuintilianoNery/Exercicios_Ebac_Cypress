/// <reference types="cypress" />
const Leite = require('leite');
const leite = new Leite();
import contrato from '../contracts/produtos.contract';
const baseUrl = 'localhost:3000';

// const nome = leite.pessoa.nome();
// const sobrenome = leite.pessoa.nome();
// const email = leite.pessoa.email();
// const senha = `${nome}.${sobrenome}`;

let token;
let idProduto;

before(function () {
    cy.buscarUsuario(0);
    cy.loginApiToken().then(tkn => { token = tkn });
    //Passe a posição do produto que deseja buscar
    cy.buscarIdProdutos(0);
});

describe('API ServeRest', function () {

    context('URI produtos', function () {
        it('Cadastrar produto', function () {
            let produto = `Produto teste ${Math.floor(Math.random() * 10000000)}`
            cy.cadastrarProdutoApi('POST', this.token, produto, 470, "Mouse", 381)
                .then((response) => {
                    expect(response.status).to.eq(201);
                    expect(response.body.message).to.eq('Cadastro realizado com sucesso');
                });
        });

        it('Buscar produtos cadastrados', function () {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/produtos`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('produtos');
            });
        });

        it('Deve validar cadastro de produto já existente na base', function () {
            cy.cadastrarProdutoApi('POST', this.token, "Produto teste 1", 470, "Mouse", 381)
                .then((response) => {
                    expect(response.status).to.eq(400);
                    expect(response.body.message).to.eq("Já existe produto com esse nome");
                });
        });

        it('Deve editar o primeiro produto da lista de produtos', function () {
            let produto = `Produto teste ${Math.floor(Math.random() * 10000000)}`
            cy.editarProdutoApi('PUT', this.token, produto, 220, "Mouse", 381)

                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.message).to.eq("Registro alterado com sucesso");
                });
        });

        it('Deve editar um produto que acabou de ser cadastrado', () => {
            let produto = `Produto teste ${Math.floor(Math.random() * 10000000)}`
            cy.cadastrarProdutoApi('POST', this.token, produto, 470, "Mouse", 381)
                .then((response) => {
                    let id = response.body._id;
                    cy.request({
                        method: 'PUT',
                        url: `${baseUrl}/produtos/${id}`,
                        headers: { authorization: token },
                        body: {
                            'nome': produto,
                            'preco': 220,
                            'descricao': "Mouse",
                            'quantidade': 381
                        }
                    }).then((response) => {
                        expect(response.status).to.eq(200);
                        expect(response.body.message).to.eq("Registro alterado com sucesso");
                    });
                });
        });

        it('Deve deletar produto que acabou de ser cadastrado', () => {
            let produto = `Produto teste ${Math.floor(Math.random() * 10000000)}`
            cy.cadastrarProdutoApi('POST', this.token, produto, 470, "Mouse", 381)
                .then((response) => {
                    let id = response.body._id;
                    cy.request({
                        method: 'DELETE',
                        url: `${baseUrl}/produtos/${id}`,
                        headers: { authorization: token },
                    }).then((response) => {
                        expect(response.status).to.eq(200);
                        expect(response.body.message).to.eq("Registro excluído com sucesso");
                    });
                });
        });
    });
});
