import User from '../support/business/User'
class SignUpPage {
    SIGN_UP_PAGE = "addUser"
    SignUpPageLocator = {
        firstName : "#firstName",
        userPassword : "#password",
        email :  "#email",
        lastName : "#lastName",
        submitButton : "#submit",
        cancelButton : "#cancel",
        pageHeader : "h1",
        pageBody : "p:nth-child(2)",
        errorMessage : "#error"
    }
    /**
     * 
     * @param user to create
     * @method creates contacts app user
     */
    create_user(user : User) {
        if (user.firstName.length > 0) {
            cy.get(this.SignUpPageLocator.firstName).clear()
            cy.get(this.SignUpPageLocator.firstName).type(user.firstName.toString())
        }
        if (user.lastName.length > 0) {
            cy.get(this.SignUpPageLocator.lastName).clear()
            cy.get(this.SignUpPageLocator.lastName).type(user.lastName.toString())
        }
        if (user.password.length > 0) {
            cy.get(this.SignUpPageLocator.userPassword).clear()
            cy.get(this.SignUpPageLocator.userPassword).type(user.password.toString())
        }
        if (user.email.length > 0) {
            cy.get(this.SignUpPageLocator.email).clear()
            cy.get(this.SignUpPageLocator.email).type(user.email.toString())
        }
 
        cy.get(this.SignUpPageLocator.submitButton).click()
    }
    /**
     * @method cancel user create operation
     */
    cancel_create_user() {
        cy.get(this.SignUpPageLocator.cancelButton).click()
    }
    /**
     * 
     * @returns page header text content
     * @method gather page header text
     */
    getHeader(){
        let result =  cy.get(this.SignUpPageLocator.pageHeader).invoke('text')
        return cy.get(this.SignUpPageLocator.pageHeader).invoke('text')
    }
    /**
     * 
     * @returns page body text content
     * @method gather page body text
     */
    getPageBody(){
        return cy.get(this.SignUpPageLocator.pageBody).invoke('text')
    }
    /**
     * 
     * @returns first name field label text content
     */
    getFirstNameFieldLabel() {
        return cy.get(this.SignUpPageLocator.firstName).invoke('text')
    }
    /**
     * 
     * @returns last name field label text content
     */
    getLastNameFieldLabel() {
        return cy.get(this.SignUpPageLocator.lastName).invoke('text')
    }
    /**
     * 
     * @returns email field label text content
     */

    getEmailFieldLabel() {
        return cy.get(this.SignUpPageLocator.email).invoke('text')
    }
    /**
     * 
     * @returns password field label text content
     */
    getPasswordFieldLabel() {
        return cy.get(this.SignUpPageLocator.userPassword).invoke('text')
    }
    /**
     * 
     * @returns error message text content
     */

    getErrorMessage() {
        return cy.get(this.SignUpPageLocator.errorMessage).invoke('text')
    }
    /**
     * 
     * @returns returns submit button availability status
     */
    isSubmitButtonEnabled() {
        return cy.get(this.SignUpPageLocator.submitButton).should("be.enabled");
    }
}
export default  new SignUpPage();