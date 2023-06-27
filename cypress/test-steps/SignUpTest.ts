import { Assertion, AssertionError } from 'chai'
import SignUpPage from '../pages/SignUpPage '
import { Dictionary } from 'cypress/types/lodash';
import {generateUser, generateUserEmailNotValid, generateUserNotSet, generateUserPasswordLessThenMin} from "../support/providers/UsersProvider"
import User from '../support/business/User'
import ContactsPage from '../pages/ ContactsPage ';
import LoginPage from '../pages/LoginPage';
let label_array : [string, string, string, string]
let pageData : {
    page_text: string,
    header_text : string,
    page_body_text : string
};
let label : {
        first_name : string,
        last_name : string,
        email : string,
        password: string
    };
let required_field : { 
    field_name : string
}
const fieldData = require('../fixtures/sign-up-test-3')

before(function() {
    cy.fixture('sign-up-test-1').then(function (data) {
        pageData = data
    })
    cy.fixture('sign-up-test-2').then(function (data) {
        label = data
        label_array = [label.email, label.first_name, label.last_name, label.password]
    })

}),
beforeEach(()=> {
    cy.visit(Cypress.env('base_url') + SignUpPage.SIGN_UP_PAGE)

}),

describe('Verify page title and  <h1> page header text' , ()=>{
        it('Verify page title and  <h1> page header text', ()=> {
            SignUpPage.getHeader().should('contain', pageData.page_text)
            cy.title().should('contain', pageData.page_text)
        })
        it("Verify page body text", ()=> {
            SignUpPage.getPageBody().should('contain', pageData.page_body_text)
           
        })
        it('Verify that the required fields marked', ()=>{
            if (label.first_name.length > 0) {
                SignUpPage.getFirstNameFieldLabel().should('contain', "*")
            } 
            if (label.last_name.length > 0) {
                SignUpPage.getLastNameFieldLabel().should('contain', "*")
            }
            if (label.email.length > 0) { 
                SignUpPage.getEmailFieldLabel().should('contain', "*")
            } 
            if (label.password.length > 0) {
                SignUpPage.getPasswordFieldLabel().should('contain', "*")
            }
        })
        it("Verify that the fields are properly labelled ", ()=>{
            if (label.first_name.length > 0) {
                SignUpPage.getFirstNameFieldLabel().should('contain', label.first_name)
            } 
            if (label.last_name.length > 0) {
                SignUpPage.getLastNameFieldLabel().should('contain',label.last_name)
            }
            if (label.email.length > 0) { 
                SignUpPage.getEmailFieldLabel().should('contain', label.email)
            } 
            if (label.password.length > 0) {
                SignUpPage.getPasswordFieldLabel().should('contain', label.password)
            }
        })

        generateUserNotSet().forEach((data) => {
            it("Verify that the attempt to create a user with an empty " + data.type + " fails with an error", () =>{
                SignUpPage.create_user(data.user)
                SignUpPage.getErrorMessage().should('deep.equal', data.error)
            })
        })
        it('Create valid-user', ()=> {
            const user = generateUser()
            SignUpPage.create_user(user);
            ContactsPage.getHeader().should('contain', ContactsPage.PAGE_TITLE)
            cy.wait(3000)
            ContactsPage.logOut();
            LoginPage.signin(user);
            ContactsPage.logOut();
        })
        it('Verify that the attempt to create a user->email thar already exists fails', () => {
            const user = generateUser()
            SignUpPage.create_user(user)
            ContactsPage.getHeader().should('contain', ContactsPage.PAGE_TITLE)
            ContactsPage.logOut()
            LoginPage.navigateToSignUp()
            SignUpPage.create_user(user)
            SignUpPage.getErrorMessage().should('deep.equal', 'Email address is already in use')
        })
        it('Attempt to create user password less then 7 chars', ()=> {
            const user = generateUserPasswordLessThenMin()
            const errorMessage = "User validation failed: `password` (" +
                        user.password + ") is shorter than the minimum allowed length (7)"
            SignUpPage.create_user(user)
            SignUpPage.getErrorMessage().should('deep.equal', errorMessage)
        })
        it('Attempt to create user email format not correct', () => {
            const user = generateUserEmailNotValid()
            SignUpPage.create_user(user)
            SignUpPage.getErrorMessage().should('deep.equal', "User validation failed: Email is invalid")
        })
    })
