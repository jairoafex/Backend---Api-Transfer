/// <reference types ="Cypress" />
describe("Probando Endpoint para giros recibidos por un cliente", () => {
    it("Consultar giros recibidos por cliente",{
    }, () => {
      cy.fixture("ClientesCreados").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/customers/${this.datos.idCliente}/received`,
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