/// <reference types="cypress" />

import { ELEMENTOS_HOME } from './elements';

class HomePage {
    acessarPaginaMinhaConta() {
        cy.get(ELEMENTOS_HOME.iconUser).click()
    }

}

export default new HomePage();