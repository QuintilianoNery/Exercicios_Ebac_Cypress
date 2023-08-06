/// <reference types="cypress" />
const Leite = require('leite');
const leite = new Leite();

const nome = leite.pessoa.nome();
const sobrenome = leite.pessoa.nome();
const email = leite.pessoa.email();
const senha = `${nome}.${sobrenome}`;

describe('API ServeRest', () => {

  context('URI login', () => {
    it('Deve fazer login com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
          'email': 'fulano@qa.com',
          'password': 'teste'
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.eq('Login realizado com sucesso');
        const token = response.body.authorization;
        cy.wrap(token).as('token');
      });
    });
  });

  context('URI usuários', () => {
    it('Cadastrar usuários', () => {
      cy.request({
        method: 'POST',
        url: 'localhost:3000/usuarios',
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

      });
    });
  });

  context('URI produtos', () => {
    it('Buscar produtos cadastrados', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/produtos'
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body.produtos[0]);
      });
    });
  });

  context('URI carrinhos', () => {
    it('Buscar carrinhos cadastrados', () => {

    });
  });

});

//describe
//before
//context
//it
//  cy.wrap(userData).as('userData');
