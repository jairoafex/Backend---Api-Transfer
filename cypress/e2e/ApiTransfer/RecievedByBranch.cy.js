/// <reference types ="Cypress" />
describe("Probando Endpoint para giros recibidos por una sucursal", () => {
    it("Consultar giros recibidos por sucursal",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/branches/${this.datos.branchCode}/received?startDate=${this.datos.starDate}&endDate=${this.datos.endDate}`,
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
  });