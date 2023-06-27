import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    specPattern: './cypress/test-steps/*',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //env: {
      //  base_url : "https://thinking-tester-contact-list.herokuapp.com/"
      //}
    },
  },
   env: {
      base_url : "https://thinking-tester-contact-list.herokuapp.com/"
      }
});
