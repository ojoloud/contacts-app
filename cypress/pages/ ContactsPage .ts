
class ContactsPage {
    PAGE_TITLE = "Contact List";
    
    ContactsPageLocator = {
        pageHeader : "h1",
        logoutButton : "#logout",
        addContactButton :  "#add-contact",
        tableHeader: "#contactTableHead"
    }
    /**
     * 
     * @returns page header text content
     */

    getHeader(){
        return cy.get(this.ContactsPageLocator.pageHeader).invoke('text')
    }
   /**
    * @method logout from application
    */
    logOut(){
        cy.get(this.ContactsPageLocator.logoutButton).click()
    }
    
}
export default new ContactsPage();