/// <reference types ="Cypress" />
const userData=require('../../fixtures/AddHistory')
describe("Probando Endpoint para agregar historia al cliente", () => {
  it("Agregar nueva Historia", () => {
    cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.idCliente);
      cy.request({
        //url: `/client/${this.datos.id}/history`,
        url: `${Cypress.env("API_CLIENTS")}/client/${this.datos.idCliente}/history`,
        method: "POST",
        headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}` },
        body: userData
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        const messages = response.body.messages
        cy.log("message=", messages);
      });
    });
  });
})
