/// <reference types ="Cypress" />
describe("Probando Endpoint para giros enviados por cliente", () => {
    it("Sent by Customer [Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/customers/${this.datos.codigo_cliente}/sent?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("Authorization")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Sent by Customer [Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/customers/${this.datos.codigo_cliente}/sent?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("Authorization")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Sent by Customer [Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/customers/${this.datos.codigo_cliente_produccion}/sent?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("Authorization")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
  });