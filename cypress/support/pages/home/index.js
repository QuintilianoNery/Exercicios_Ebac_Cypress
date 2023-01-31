/// <reference types="cypress" />

import { ELEMENTOSHOME } from './elements';

class HomePage {
    acessarPaginaMinhaConta() {
        cy.get(ELEMENTOSHOME.iconUser).click()
    }

}

export default new HomePage();