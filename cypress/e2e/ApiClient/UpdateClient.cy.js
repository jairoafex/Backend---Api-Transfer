/// <reference types ="Cypress" />
const userData=require('../../fixtures/ActualizarCliente')
describe("Probando Endpoint para actualizar clientes", () => {
    it("Actualizar datos de contacto", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_CLIENTS")}/clients/${this.datos.idCliente}`,
          method: "PUT",
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
  });
  