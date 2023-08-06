/// <reference types="cypress" />
const Leite = require('leite');
const leite = new Leite();

const nome = leite.pessoa.nome();
const sobrenome = leite.pessoa.nome();
const email = leite.pessoa.email();
const senha = `${nome}.${sobrenome}`;

const url = 'localhost:3000';

before(() => {
    cy.request({
        method: 'GET',
        url: `${url}/usuarios`
    }).then((response) => {
        const idPrimeiroUsuario = (response.body.usuarios[0]._id);
        cy.wrap(idPrimeiroUsuario).as('idPrimeiroUsuario');

        const passwordPrimeiroUsuario = (response.body.usuarios[0].password);
        cy.wrap(passwordPrimeiroUsuario).as('passwordPrimeiroUsuario');

        const emailPrimeiroUsuario = (response.body.usuarios[0].email);
        cy.wrap(emailPrimeiroUsuario).as('emailPrimeiroUsuario');

        const nomePrimeiroUsuario = (response.body.usuarios[0].nome);
        cy.wrap(nomePrimeiroUsuario).as('nomePrimeiroUsuario');
    });
});

describe('API ServeRest', () => {

    context('URI carrinhos', () => {
        it('Buscar carrinhos cadastrados', () => {

        });
    });
});
