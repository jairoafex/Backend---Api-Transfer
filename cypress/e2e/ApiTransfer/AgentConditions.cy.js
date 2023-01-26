/// <reference types ="Cypress" />
describe("Probando Endpoint para obtener sucursales por agente", () => {
    it("Obtiene las sucursales de pago de un agente en un país y ciudad.",{
    }, () => {
      cy.fixture("Agentes").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/agent/${this.datos.id}/conditions/${this.datos.country}/${this.datos.city}`,
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