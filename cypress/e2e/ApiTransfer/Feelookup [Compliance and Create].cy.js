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
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("Authorization")}` },
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
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/compliance`,
          method: "POST",
          failOnStatusCode:false,
          headers: { "Authorization": `${Cypress.env("Authorization")}` },
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
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/compliance/create`,
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
          headers: { "Authorization": `${Cypress.env("Authorization")}` },
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
          headers: { "Authorization": `${Cypress.env("Authorization")}` },
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
    it.skip("Feelookup[Produccion]",{
    }, () => {
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/feelookup/`,
          method: "POST",
          failOnStatusCode:false,
          headers: { "x-api-key": `${Cypress.env("API_TRANSFER_VALUE_PRODUCCION")}` },
          body: {
              amount: "200",
              branchId: "00",
              branchCode: "",
              receiverCountry: "CO",
              receiverCity: "BOG",
              includeFee:false,
              methodPayment: "",
              originCurrency: "USD"
          }
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body.messages).have.to.eq("branchCode is missing")
        });
    });
    it.skip("Feelookup Compliance[Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", id_giro);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/feelookup/compliance`,
          method: "POST",
          failOnStatusCode:false,
          headers: { "x-api-key": `${Cypress.env("API_TRANSFER_VALUE_PRODUCCION")}` },
          body: {
            feelookupId: this.datos.idCotizacion_produccion,
            quoteId: this.datos.idquote,
            corporateCode: this.datos.codigo_cliente_produccion
          },
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages).have.to.eq("transaction not allowed")
          const messages = response.body.messages
          cy.log("messages", messages);
        });
      });
    });
  });