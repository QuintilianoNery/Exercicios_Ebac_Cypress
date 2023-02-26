/// <reference types="cypress" />

import { ELEMENTOSMINHACONTA } from './../minhaConta/elements';

class MinhaConta {
    digitarNomeDoUsuario(usuario) {
        cy.get(ELEMENTOSMINHACONTA.nomeDoUsuario).type(usuario, { log: false });
    }

    digitarSenhaDoUsuario(senha) {
        cy.get(ELEMENTOSMINHACONTA.senhaDoUsuario).type(senha, { log: false });
    }

    marcarCheckLembrarLogin() {
        cy.get(ELEMENTOSMINHACONTA.rememberme).click();
    }
    clicarBotaoLogin() {
        cy.get(ELEMENTOSMINHACONTA.buttonLogin).click();
    }

    validarUrlVisivel(url) {
        cy.url().should('be.equal', url)
    }

    validarMenuMinhaContaVisivel() {
        cy.get(ELEMENTOSMINHACONTA.menuMinhaConta).eq(3).should('be.visible').should('contain.text', 'Endereços');
    }

    validarMensagemErroLogin() {
        cy.get(ELEMENTOSMINHACONTA.erroLogin).should('be.visible');
    }
}

export default new MinhaConta();