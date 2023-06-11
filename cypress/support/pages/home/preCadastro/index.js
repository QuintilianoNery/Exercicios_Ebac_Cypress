/// <reference types="cypress" />

import { ELEMENTOS_PRE_CADASTRO } from './../preCadastro/elements.js';


class PreCadastro {
    clickIcone() {
        cy.get(ELEMENTOS_PRE_CADASTRO.iconeLogin).click()
    }
    preencherEmail(email) {
        cy.get(ELEMENTOS_PRE_CADASTRO.campoEmail).type(email)
    }
    preencherSenha(senha) {
        cy.get(ELEMENTOS_PRE_CADASTRO.campoSenha).type(senha)
    }
    clickBotaoRegistrar() {
        cy.get(ELEMENTOS_PRE_CADASTRO.campoRegistrar).click()
    }
    preencherNome(nome) {
        cy.get(ELEMENTOS_PRE_CADASTRO.campoNome).type(nome)
    }
    preencherSobrenome(sobreNome) {
        cy.get(ELEMENTOS_PRE_CADASTRO.campoSobrenome).type(sobreNome)
    }
    clickBotaoSalvar() {
        cy.get(ELEMENTOS_PRE_CADASTRO.botaoSalvarMinhaConta).click()
    }
    verificarSeContemMensagemBoasVindas() {
        cy.get(ELEMENTOS_PRE_CADASTRO.mensagemBoasVindas)
            .should('contain', 'Detalhes da conta modificados com sucesso.')
    }
}

export default new PreCadastro();
