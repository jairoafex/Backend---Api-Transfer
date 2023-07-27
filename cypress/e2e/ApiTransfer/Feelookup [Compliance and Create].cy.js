/// <reference types ="Cypress" />
const userData=require('../../fixtures/Feelookup')
let id_giro={};
describe("Testing API Transfer [Feelookup, FeelookupCompliance, FeelookupCreate]", () => {
    it("Feelookup[Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_STAGING')}/v1/transfers/feelookup/`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}` },
          body: userData
          
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("id");
          id_giro=response.body.data.id
          cy.log("id", id_giro);
        });
      });
    });
    it("Feelookup Compliance[Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", id_giro);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_STAGING')}/v1/transfers/feelookup/compliance`,
          method: "POST",
          failOnStatusCode:false,
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}` },
          body: {
            feelookupId: id_giro,
            quoteId: this.datos.idquote,
            corporateCode: this.datos.codigo_cliente
          },
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("message");
          const messages = response.body.messages
          cy.log("messages", messages);
        });
      });
    });
    it("FeelookupComplianceCreate[Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_STAGING')}/v1/transfers/feelookup/compliance/create`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("Authorization")}` },
          body: {
            feelookupId: id_giro,
            branchName: this.datos.branchName,
            cityName: this.datos.cityName,
            countryName: this.datos.countryName,
            userFullName: this.datos.userFullName
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("message");
          const messages = response.body.messages
          cy.log("messages", messages);
        });
      });
    });
    it("Feelookup[Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/feelookup/`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}` },
          body: userData
          
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("id");
          id_giro=response.body.data.id
          cy.log("id", id_giro);
        });
      });
    });
    it("Feelookup Compliance[Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", id_giro);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/feelookup/compliance`,
          method: "POST",
          failOnStatusCode:false,
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}` },
          body: {
            feelookupId: id_giro,
            quoteId: this.datos.idquote,
            corporateCode: this.datos.codigo_cliente
          },
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("message");
          const messages = response.body.messages
          cy.log("messages", messages);
        });
      });
    });
    it("FeelookupComplianceCreate[Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/feelookup/compliance/create`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}` },
          body: {
            feelookupId: id_giro,
            branchName: this.datos.branchName,
            cityName: this.datos.cityName,
            countryName: this.datos.countryName,
            userFullName: this.datos.userFullName
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("message");
          const messages = response.body.messages
          cy.log("messages", messages);
        });
      });
    });
    it("Feelookup[Produccion]",{
    }, () => {
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/feelookup`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}` },
          body: {
              amount: 200,
              branchId: "00",
              branchCode: "AG",
              receiverCountry: "CO",
              receiverCity: "BOG",
              includeFee:false,
              originCurrency: "USD"
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.status).have.to.eq("success")
        });
    });
    it.only("Feelookup Compliance[Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", id_giro);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/feelookup/compliance`,
          method: "POST",
          failOnStatusCode:false,
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}` },
          body: {
            feelookupId: this.datos.idCotizacion_produccion,
            quoteId: this.datos.idquote,
            corporateCode: this.datos.codigo_cliente_produccion
          },
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("message");
          expect(response.body.message).have.to.eq("Error trying to evaluate send transfer")
          const messages = response.body.message
          cy.log("messages", messages);
        });
      });
    });
  });