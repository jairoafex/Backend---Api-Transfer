/// <reference types ="Cypress" />
describe("Probando Endpoint para giros recibidos por un cliente", () => {
    it("Recieved By Customer [Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/customers/${this.datos.codigo_cliente}/received?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
          method: "GET",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Recieved By Customer [Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/customers/${this.datos.codigo_cliente}/received?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
          method: "GET",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE_SANDBOX")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Recieved By Customer [Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/customers/${this.datos.codigo_cliente_produccion}/received?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
          method: "GET",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFER_VALUE_PRODUCCION")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
  });