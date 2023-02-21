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
    API_TRANSFERS_VALUE:'l48r2vlY0B9BdzsHzym6u3uxnHLug6023pcW203b',
    SLACK_WEBHOOK:'https://hooks.slack.com/services/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'
  }
});


const {IncomingWebhook } = require('@slack/webhook');

const url = "https://hooks.slack.com/services/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";
const webhook = new IncomingWebhook(url);

(async () => {
  const { totalTests, totalPassed, totalFailed } = Cypress.runner.stats;

  await webhook.send({
    text: `Cypress tests summary:\n- Total tests: ${totalTests}\n- Passed tests: ${totalPassed}\n- Failed tests: ${totalFailed}`
  });
  url.send(message);
  });

