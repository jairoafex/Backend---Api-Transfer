const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tnswnb',
  e2e: {
    setupNodeEvents(on, config) {

      
    },
    baseUrl: 'https://he9n83rsg0.execute-api.us-west-2.amazonaws.com/staging'
  },
});
