/// <reference types="cypress" />

const perfil = require('../../fixtures/perfil.json');
// import HomePage from './../support/pages/home'
import MinhaConta from '../../support/pages/home/minhaConta';

const Leite = require('leite');
const leite = new Leite();

const nome = leite.pessoa.nome();
const sobrenome = leite.pessoa.nome({ nomeDoMeio: true });
const nomeEmpresa = 'EBAC';
const pais = 'Brasil';
const endereco1 = leite.localizacao.bairro();
const endereco2 = leite.localizacao.logradouro();
const cidade = 'Vitória';
const estado = 'Espírito Santo';
const cep = '29010-004';
const telefone = '9999-9999';
const email = 'q@q.com';

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta');
    // cy.login(perfil.usuarioEbac, perfil.senhaEbac) OU assim:
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuarioEbac, dados.senhaEbac);
      MinhaConta.clicarBotaoLogin();
    });
  });

  it.only('Editar o endereço de faturamento e entrega', () => {
    cy.step('Login');
    MinhaConta.validarUrlVisivel(perfil.baseUrl + perfil.uri.minhaConta);
    MinhaConta.validarMenuMinhaContaVisivel();
    cy.section('step 1 dados de cobrança');
    cy.step('Dado que o usuário entre no menu minhas contas');
    MinhaConta.clickMenuMinhaConta();
    MinhaConta.estaVisivelContentMyAccount();
    cy.step('Quando clicar no botão Editar');
    MinhaConta.clicarEnderecoDeFaturamento();
    cy.step('Enão poderá editar os dados de cobrança  ');
    MinhaConta.digiteNome(nome);
    MinhaConta.digiteSobrenome(sobrenome);
    MinhaConta.digiteNomeEmpresa(nomeEmpresa);
    MinhaConta.selecioneOPais(pais);
    MinhaConta.digiteEndereco(endereco1, endereco2);
    MinhaConta.digiteCidade(cidade);
    MinhaConta.selecioneEstado(estado);
    MinhaConta.digiteCep(cep);
    MinhaConta.digiteTelefone(telefone);
    MinhaConta.digiteEmail(email);
    MinhaConta.cliqueBotaoSalvarEndereco();

    MinhaConta.alertaEndereçoAtualizado();

    // cy.section('step 1 dados de entrega')
    // cy.step('Dado que o usuário entre no menu minhas contas')
    // cy.step('Quando clicar no botão Editar')
    // cy.step('Enão poderá editar os dados de cobrança')

  });
});
