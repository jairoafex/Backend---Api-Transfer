const { 
  defineConfig

} = require("cypress");


module.exports = defineConfig({
  projectId: "9qjzf8",
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-json-results')({
        on,
        filename: 'cypress/results.json', // default filename
      })

    },
  },
  env:{
    API_TRANSFER:'https://wo8s5y6tnc.execute-api.us-west-2.amazonaws.com/staging',
    API_CLIENTS_VALUE:'9RubKS6Sir1pNh1Mv7Zhp8JDxIoOkn0VnSKjQs25',
    API_CLIENTS:'https://he9n83rsg0.execute-api.us-west-2.amazonaws.com/staging',
    API_TRANSFERS_VALUE:'l48r2vlY0B9BdzsHzym6u3uxnHLug6023pcW203b' 
  }
});


const slackWebhook = require('slack-webhook');

const slack = new slackWebhook(process.env.SLACK_WEBHOOK);

after(() => {
  const { totalTests, totalPassed, totalFailed } = Cypress.runner.stats;

  const message = {
    text: `Cypress tests summary:\n- Total tests: ${totalTests}\n- Passed tests: ${totalPassed}\n- Failed tests: ${totalFailed}`,
  };

  slack.send(message);
});

