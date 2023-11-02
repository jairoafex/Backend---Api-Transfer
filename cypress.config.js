const { 
  defineConfig

} = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "9qjzf8",
  e2e: {
    retries:2,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return cloudPlugin(on, config);
      //return config;

    },
  },
  env:{
    //staging
    API_TRANSFER_STAGING:'https://wo8s5y6tnc.execute-api.us-west-2.amazonaws.com/staging',
    AUTHORIZATION_TRANSFER_STAGING:'Bearer AFX59ca841434b544069953a60b7c0fa6e7',
    API_CLIENTS_STAGING:'https://he9n83rsg0.execute-api.us-west-2.amazonaws.com/staging',
    AUTHORIZATION_CLIENTS:'Bearer AFX378015ac4eb741fc8bcdb67280970c65',
    Authorization:'dummySessionToken',
    //SandBox
    API_TRANSFER_SANDBOX:'https://f9afcpjnd0.execute-api.us-west-2.amazonaws.com/sandbox',
    API_TRANSFERS_VALUE_SANDBOX:'3V8rrt7ky51Vf8y8czlpv8kmPvtFeA5K8Kk47ua3',
    API_CLIENTS_SANDBOX:'https://swlp1lk94b.execute-api.us-west-2.amazonaws.com/sandbox',
    AUTHORIZATION_TRANSFER_SANDBOX:'Bearer AFX59ca841434b544069953a60b7c0fa6e7',
    //produccion
    API_CLIENTS_PRODUCCION:'https://upzm77vdee.execute-api.us-east-1.amazonaws.com/prod',
    API_CLIENTS_VALUE_PRODUCCION:'UiE7AkKjZJ5KvQTZicLOoySKWtCwKdJEZjztlpe0',
    API_TRANSFER_PRODUCCION:'https://9tfugwil00.execute-api.us-east-1.amazonaws.com/prod',
    API_TRANSFER_VALUE_PRODUCCION:'naI6IfRpH04HbVqe40Jeg7UJMsLgJLX812yYKHXK',
    AUTHORIZATION_CLIENTS_PRODUCCION:"Bearer AFX0d97946b115f4f5caf86e8e234e9d22d",
    AUTHORIZATION_TRANSFERS_PRODUCCION:"Bearer AFX536cba5c6b7b4f8291d78aa0f5925d5b",
    //Certificacion
    API_CLIENTS_CERTIFICACION:'https://x3aomdl5kc.execute-api.us-east-2.amazonaws.com/cert',
    API_CLIENTS_VALUE_CERTIFICACION:'UiE7AkKjZJ5KvQTZicLOoySKWtCwKdJEZjztlpe0',
    API_TRANSFER_CERTIFICACION:'https://6sezrpmpx2.execute-api.us-east-2.amazonaws.com/cert',
    API_TRANSFER_VALUE_CERTIFICACION:'naI6IfRpH04HbVqe40Jeg7UJMsLgJLX812yYKHXK',
    AUTHORIZATION_CLIENTS_CERTIFICACION:"Bearer AFX0d97946b115f4f5caf86e8e234e9d22d",
    AUTHORIZATION_TRANSFERS_CERTIFICACION:"Bearer AFX536cba5c6b7b4f8291d78aa0f5925d5b",

    SLACK_WEBHOOK:'https://hooks.slack.com/services/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',
    SLACK_TOKEN:'xoxb-671745439778-4820436549719-Q7AS9e1N1XqF2OpsSi68rSDH'
  }
});
