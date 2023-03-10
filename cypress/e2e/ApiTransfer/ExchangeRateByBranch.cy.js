/// <reference types ="Cypress" />
describe("Probando endpoint que obtiene valor de cambio", () => {
    it("Exchange by rate [Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/exchangeRate/${this.datos.branchCode}`,
          method: "GET",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("data");
          const data = response.body.data
          cy.log("data", data);
        });
      });
    });
    it("Exchange by rate [Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/exchangeRate/${this.datos.branchCode}`,
          method: "GET",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE_SANDBOX")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("data");
          const data = response.body.data
          cy.log("data", data);
        });
      });
    });
    it("Exchange by rate [Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/exchangeRate/${this.datos.branchCode}`,
          method: "GET",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFER_VALUE_PRODUCCION")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("data");
          const data = response.body.data
          cy.log("data", data);
        });
      });
    });
  });