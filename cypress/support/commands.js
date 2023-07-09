import MinhaConta from './pages/home/minhaConta/index'
import PreCadastro from './pages/home/preCadastro/index'

Cypress.Commands.add('login', (usuario, senha) => {
    MinhaConta.digitarNomeDoUsuario(usuario);
    MinhaConta.digitarSenhaDoUsuario(senha);
    MinhaConta.marcarCheckLembrarLogin();
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobreNome) => {
    PreCadastro.clickIcone();
    PreCadastro.preencherEmail(email);
    PreCadastro.preencherSenha(senha);
    PreCadastro.clickBotaoRegistrar();
    cy.visit('/minha-conta/edit-account/')
    PreCadastro.preencherNome(nome);
    PreCadastro.preencherSobrenome(sobreNome);
    PreCadastro.clickBotaoSalvar();
    PreCadastro.verificarSeContemMensagemBoasVindas();
})