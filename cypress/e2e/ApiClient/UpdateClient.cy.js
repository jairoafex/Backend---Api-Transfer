/// <reference types ="Cypress" />
const userData=require('../../fixtures/ActualizarCliente')
describe("Testing API Clients [UpdateClient]", () => {
    it("Update Client [Staging]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/${this.datos.idCliente_staging}`,
          method: "PUT",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
          body: userData
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          const messages = response.body.messages
          cy.log("message=", messages);
        });
      });
    });
    it("UpdateClient [Sandbox]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/${this.datos.idCliente_sandbox}`,
          method: "PUT",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
          body: userData
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          const messages = response.body.messages
          cy.log("message=", messages);
        });
      });
    });
    it.skip("Actualizar cliente [Produccion]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/${this.datos.idCliente}`,
          method: "PUT",
          failOnStatusCode:false,
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}` },
          body: userData
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages[0]).have.to.eq("client not found");
        });
      });
    });
  });
  