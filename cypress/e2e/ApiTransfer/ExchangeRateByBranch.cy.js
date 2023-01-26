/// <reference types ="Cypress" />
describe("Probando Endpoint para giros enviados por cliente", () => {
    it("Crear nueva cotizacion",{
    }, () => {
      cy.fixture("Agentes").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/exchangeRate/${this.datos.id}`,
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
  });