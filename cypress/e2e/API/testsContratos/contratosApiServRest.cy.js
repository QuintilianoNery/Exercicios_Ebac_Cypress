/// <reference types="cypress" />
import contratoProdutos from '../../contracts/produtos.contract';
import contratoUsuarios from '../../contracts/usuarios.contract';
import contratoCarrinhos from '../../contracts/carrinho.contract';
const baseUrl = 'localhost:3000';

describe('Testes de contratos ApiServRest', () => {
    context('Endpoint Produtos', () => {
        it('Deve validar o contrato de produtos', function () {
            cy.request(`${baseUrl}/produtos`).then((response) => {
                return contratoProdutos.validateAsync(response.body);
            });
        });
    });

    context('Endpoint Usuários', () => {
        it('Deve validar o contrado de pessoas', () => {
            cy.request(`${baseUrl}/usuarios`).then((response) => {
                return contratoUsuarios.validateAsync(response.body);
            });
        });
    });

    context('Endpoint carrinho', () => {
        it('Deve validar o contrato de carrinho', () => {
            cy.request(`${baseUrl}/carrinhos`).then((response) => {
                return contratoCarrinhos.validateAsync(response.body);
            });
        });
    });
});