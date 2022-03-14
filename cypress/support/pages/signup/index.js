
import { el } from './elements'

import toast from '../../components/toast'

class SignupPage {

    constructor() {
        this.toast = toast
    }

    go() {
        cy.visit('/signup')
    }

    form(user) {
        cy.get(el.name).type(user.name)
        cy.get(el.email).type(user.email)
        cy.get(el.password).type(user.password)
    }

    submit() {
        cy.contains(el.signupButton).click()
    }

    alertHaveText(expectedText) {
        cy.contains('.alert-error', expectedText)
            .should('be.visible')
    }

}

export default new SignupPage()