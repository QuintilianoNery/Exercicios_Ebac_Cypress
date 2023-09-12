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
        it('Deve cadastrar um usuário com sucesso', function () {
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

        it('Deve listar usuários cadastrados', () => {
            cy.request({
                method: 'GET',
                url: 'localhost:3000/usuarios'
            }).then((response) => {
                expect(response.status).to.eq(200);
                cy.log(response.body.usuarios[0]._id);
            });
        });

        it('Deve buscar um usuário previamente cadastrado por ID', function () {
            cy.request({
                method: 'GET',
                url: `${url}/usuarios/${this.idPrimeiroUsuario}`
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Deve editar um usuário previamente cadastrado', function () {
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

        it('Deve deletar um usuário previamente cadastrado', function () {
            cy.request({
                method: 'DELETE',
                url: `${url}/usuarios/${this.idPrimeiroUsuario}`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq('Registro excluído com sucesso');
            });
        });

        it('Deve validar contrato de usuários', () => {
            cy.request({
                method: 'GET',
                url: `${url}/usuarios`
            }).then((response) => {
                expect(response.status).to.eq(200);
                const contratoEsperado = {
                    usuarios: [{
                        nome: String,
                        email: String,
                        password: String,
                        administrador: String,
                        _id: String,
                    }]
                };
                expect(response.body.usuarios[0]).be.eq(contratoEsperado.usuarios[0]);
            });
        });


    });

});
