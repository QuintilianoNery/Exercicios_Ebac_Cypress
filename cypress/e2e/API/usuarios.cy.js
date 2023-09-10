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

    context('URI usuários', function () {
        it('Cadastrar usuários', function () {
            cy.request({
                method: 'POST',
                url: `${url}/usuarios`,
                body: {
                    'nome': nome,
                    'email': email,
                    'password': senha,
                    'administrador': 'true'
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq('Cadastro realizado com sucesso');
            });
        });

        it('Buscar usuários cadastrados', () => {
            cy.request({
                method: 'GET',
                url: 'localhost:3000/usuarios'
            }).then((response) => {
                expect(response.status).to.eq(200);
                cy.log(response.body.usuarios[0]._id);
            });
        });

        it('Buscar usuário por ID', function () {
            cy.request({
                method: 'GET',
                url: `${url}/usuarios/${this.idPrimeiroUsuario}`
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Editar usuário por ID', function () {
            cy.request({
                method: 'PUT',
                url: `${url}/usuarios/${this.idPrimeiroUsuario}`,
                body: {
                    'nome': nome,
                    'email': leite.pessoa.email(),
                    'password': senha,
                    'administrador': 'true'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq('Registro alterado com sucesso');
            }
            );
        });

        it('Deletar usuário por ID', function () {
            cy.request({
                method: 'DELETE',
                url: `${url}/usuarios/${this.idPrimeiroUsuario}`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq('Registro excluído com sucesso');
            });
        });
    });

});
