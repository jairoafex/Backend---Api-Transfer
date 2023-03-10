/// <reference types ="Cypress" />
const userData=require('../../fixtures/ActualizarCliente')
describe("Actualizar cliente", () => {
    it("Actualizar datos de contacto [Staging]", () => {
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
    it("Actualizar cliente [Sandbox]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/${this.datos.idCliente}`,
          method: "PUT",
          headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE_SANDBOX")}` },
          body: userData
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          const messages = response.body.messages
          cy.log("message=", messages);
        });
      });
    });
    it("Actualizar cliente [Produccion]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/${this.datos.idCliente}`,
          method: "PUT",
          failOnStatusCode:false,
          headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE_PRODUCCION")}` },
          body: userData
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages[0]).have.to.eq("client not found");
        });
      });
    });
  });
  