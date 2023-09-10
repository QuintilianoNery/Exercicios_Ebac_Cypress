/// <reference types="cypress" />
const Leite = require('leite');
const leite = new Leite();

const nome = leite.pessoa.nome();
const sobrenome = leite.pessoa.nome();
const email = leite.pessoa.email();
const senha = `${nome}.${sobrenome}`;

const url = 'localhost:3000';

before(function () {
    cy.buscarUsuario(0);
    // cy.loginApiToken();
});

describe('API ServeRest', function () {

    context('URI login', function () {
        it('Deve fazer login com sucesso', function () {
            cy.request({
                method: 'POST',
                url: `${url}/login`,
                body: {
                    'email': this.emailPrimeiroUsuario,
                    'password': this.passwordPrimeiroUsuario
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.message).to.eq('Login realizado com sucesso');
                const token = response.body.authorization;
                cy.wrap(token).as('token');
            });
        });

    });
});
