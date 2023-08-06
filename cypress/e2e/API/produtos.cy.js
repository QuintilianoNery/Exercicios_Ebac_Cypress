/// <reference types="cypress" />
const Leite = require('leite');
const leite = new Leite();

const nome = leite.pessoa.nome();
const sobrenome = leite.pessoa.nome();
const email = leite.pessoa.email();
const senha = `${nome}.${sobrenome}`;

const url = 'localhost:3000';
let token;
before(function () {
    cy.buscarUsuario(0);
    cy.loginApiToken().then(tkn => { token = tkn });
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

        it.only('teste token', function () {
            cy.log(this.token);
        })

        it.only('Cadastrar produto', function () {
            cy.request({
                method: 'POST',
                url: `${url}/produtos`,

                body: {
                    "nome": "Produto Novo teste teste3",
                    "preco": 470,
                    "descricao": "Mouse",
                    "quantidade": 381
                },
                headers: {
                    authorization: this.token
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq('Cadastro realizado com sucesso');
            });
        });
    });
});
