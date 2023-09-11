import MinhaConta from './pages/home/minhaConta/index';
import PreCadastro from './pages/home/preCadastro/index';
import HomeProduto from './pages/home/produtos/index.js';
import HomePage from './pages/home/index.js';
import HomeCarrinho from './pages/home/carrinho/index.js';

const url = 'localhost:3000';

Cypress.Commands.add('login', (usuario, senha) => {
  MinhaConta.digitarNomeDoUsuario(usuario);
  MinhaConta.digitarSenhaDoUsuario(senha);
  MinhaConta.marcarCheckLembrarLogin();
});

Cypress.Commands.add('preCadastro', (email, senha, nome, sobreNome) => {
  PreCadastro.clickIcone();
  PreCadastro.preencherEmail(email);
  PreCadastro.preencherSenha(senha);
  PreCadastro.clickBotaoRegistrar();
  cy.visit('/minha-conta/edit-account/');
  PreCadastro.preencherNome(nome);
  PreCadastro.preencherSobrenome(sobreNome);
  PreCadastro.clickBotaoSalvar();
  PreCadastro.verificarSeContemMensagemBoasVindas();
});

Cypress.Commands.add('LoginCompras', (usuario, senha) => {
  cy.login(usuario, senha);
  MinhaConta.clicarBotaoLogin();
  MinhaConta.clicarLogoHome();
});

Cypress.Commands.add('adicionarProdutoAoCarrinho', (produtoInfo) => {
  cy.step('Devo pesquisar o produto desejado');
  HomePage.clicarBotaoPesquisar();
  HomePage.digitarNomeProduto(produtoInfo.nome);
  HomePage.pesquisarProduto();
  cy.step('Dado que o usuário identifique o produto desejado');
  HomeProduto.clickButtonTamanho(produtoInfo.tamanho);
  HomeProduto.clickColor(produtoInfo.cor);
  cy.step('Quando está na página do produto poderá escolher a cor, tamanho e quantidade');
  HomeProduto.insertQuantity(produtoInfo.quantidade);
  cy.step('Então deve incluir o prduto desejado no carrinho');
  HomeProduto.addProductToCart();
});

Cypress.Commands.add('validarProdutoNoCarrinho', (produtoInfo) => {
  cy.step('Validar se o produto está no carrinho');
  HomeCarrinho.validarUrlPaginaProduto();
  HomeCarrinho.validarNomeProdutoNoCarrinho(produtoInfo.produtoSelecionado);
  HomeCarrinho.validarQuantidadeProdutoNoCarrinho(produtoInfo.quantidade);
  HomeCarrinho.validarSubTotalProduto(produtoInfo.quantidade, produtoInfo.precoUnitario);
  HomeCarrinho.validarSubTotalCarrinho(produtoInfo.quantidade, produtoInfo.precoUnitario);
  HomeCarrinho.validarTotalCarrinho(produtoInfo.quantidade, produtoInfo.precoUnitario);
});

Cypress.Commands.add('token', (email, senha) => {
  cy.request({
    method: 'POST',
    url: 'login',
    body: {
      'email': email,
      'password': senha
    }
  }).then((response) => {
    expect(response.status).to.equal(200);
    return response.body.authorization;
  });
});

Cypress.Commands.add('cadastrarProduto', (token, produto, preco, descricao, quantidade) => {
  cy.request({
    method: 'POST',
    url: 'produtos',
    headers: { authorization: token },
    body: {
      'nome': produto,
      'preco': preco,
      'descricao': descricao,
      'quantidade': quantidade
    },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('buscarIdProdutos', (position) => {
  cy.request({
    method: 'GET',
    url: `${url}/produtos`
  }).then((response) => {
    const idPrimeiroProduto = (response.body.produtos[position]._id);
    cy.wrap(idPrimeiroProduto).as('idPrimeiroProduto');
  })
});


Cypress.Commands.add('buscarUsuario', function (position) {
  cy.request({
    method: 'GET',
    url: `${url}/usuarios`
  }).then((response) => {
    const idPrimeiroUsuario = (response.body.usuarios[position]._id);
    cy.wrap(idPrimeiroUsuario).as('idPrimeiroUsuario');

    const passwordPrimeiroUsuario = (response.body.usuarios[position].password);
    cy.wrap(passwordPrimeiroUsuario).as('passwordPrimeiroUsuario');

    const emailPrimeiroUsuario = (response.body.usuarios[position].email);
    cy.wrap(emailPrimeiroUsuario).as('emailPrimeiroUsuario');

    const nomePrimeiroUsuario = (response.body.usuarios[position].nome);
    cy.wrap(nomePrimeiroUsuario).as('nomePrimeiroUsuario');
  });
});

Cypress.Commands.add('loginApiToken', function () {
  cy.request({
    method: 'POST',
    url: `${url}/login`,
    body: {
      'email': this.emailPrimeiroUsuario,
      'password': this.passwordPrimeiroUsuario
    }
  }).then((response) => {
    expect(response.status).to.equal(200);
    const token = response.body.authorization;
    cy.wrap(token, { log: false }).as('token');
  });
})

Cypress.Commands.add('cadastrarProdutoApi', function (method, token, produto, preco, descricao, quantidade) {
  cy.request({
    method: method,
    url: `${url}/produtos`,
    headers: { authorization: this.token, },
    body: {
      "nome": produto,
      "preco": preco,
      "descricao": descricao,
      "quantidade": quantidade
    },
    failOnStatusCode: false
  })
});

Cypress.Commands.add('editarProdutoApi', function (method, token, produto, preco, descricao, quantidade) {
  cy.request({
    method: method,
    url: `${url}/produtos/${this.idPrimeiroProduto}`,
    headers: { authorization: this.token, },
    body: {
      "nome": produto,
      "preco": preco,
      "descricao": descricao,
      "quantidade": quantidade
    },
    failOnStatusCode: false
  })
});