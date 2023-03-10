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
    //staging
    API_TRANSFER:'https://wo8s5y6tnc.execute-api.us-west-2.amazonaws.com/staging',
    API_CLIENTS_VALUE:'9RubKS6Sir1pNh1Mv7Zhp8JDxIoOkn0VnSKjQs25',
    API_CLIENTS:'https://he9n83rsg0.execute-api.us-west-2.amazonaws.com/staging',
    API_TRANSFERS_VALUE:'l48r2vlY0B9BdzsHzym6u3uxnHLug6023pcW203b',
    //SandBox
    API_TRANSFER_SANDBOX:'https://f9afcpjnd0.execute-api.us-west-2.amazonaws.com/sandbox',
    API_TRANSFERS_VALUE_SANDBOX:'3V8rrt7ky51Vf8y8czlpv8kmPvtFeA5K8Kk47ua3',
    API_CLIENTS_SANDBOX:'https://swlp1lk94b.execute-api.us-west-2.amazonaws.com/sandbox',
    API_CLIENTS_VALUE_SANDBOX:'GejzsXWU5G9c0OPYBfh7V31ECWGb4Cfk8U3eN6zr',
    //produccion
    API_CLIENTS_PRODUCCION:'https://upzm77vdee.execute-api.us-east-1.amazonaws.com/prod',
    API_CLIENTS_VALUE_PRODUCCION:'UiE7AkKjZJ5KvQTZicLOoySKWtCwKdJEZjztlpe0',
    API_TRANSFER_PRODUCCION:'https://9tfugwil00.execute-api.us-east-1.amazonaws.com/prod',
    API_TRANSFER_VALUE_PRODUCCION:'naI6IfRpH04HbVqe40Jeg7UJMsLgJLX812yYKHXK',

    SLACK_WEBHOOK:'https://hooks.slack.com/services/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',
    SLACK_TOKEN:'xoxb-671745439778-4820436549719-Q7AS9e1N1XqF2OpsSi68rSDH'
  }
});
