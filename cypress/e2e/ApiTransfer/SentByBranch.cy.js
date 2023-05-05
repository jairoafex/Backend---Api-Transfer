/// <reference types ="Cypress" />
describe("Probando Endpoint para consultar envios por sucursal", () => {
    it("Sent By Branch [Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/branches/${this.datos.branchCode}/sent?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
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
    it("Sent By Branch [Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/branches/${this.datos.branchCode}/sent?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
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
    it("Sent By Branch [Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/branches/${this.datos.branchCode}/sent?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
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