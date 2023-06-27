/// <reference types="cypress" />
import User from '../support/business/User'
class LoginPage {

    LoginPageLocators = {
        email : "#email",
        password : "#password",
        pageHeader :"h1",
        submitButton : "#submit",
        signUpButton : "#signup"
    }
    /**
     * @method navigate to the Sign Up Page
     */
    navigateToSignUp(): void {
        cy.get(this.LoginPageLocators.signUpButton).click()
    }
    /**
     * 
     * @param user contacts app user
     * @method sign in to the contacts app
     */
    signin(user: User): void {
        if (user.email.length > 0) {
            cy.get(this.LoginPageLocators.email).clear()
            cy.get(this.LoginPageLocators.email).type(user.email.toString())     
        }
        if (user.password.length > 0) {
            cy.get(this.LoginPageLocators.password).clear()
            cy.get(this.LoginPageLocators.password).type(user.password.toString())     
        }
        cy.get(this.LoginPageLocators.submitButton).click()
    }
    /**
     * 
     * @returns page header text content
     * @method get Page header text content
     */
    getHeader(): Cypress.Chainable<String>{
        return cy.get(this.LoginPageLocators.pageHeader).invoke('text')    
    }
}
export default new  LoginPage();
