/// <reference types ="Cypress" />
const userData=require('../../fixtures/AddHistory')
describe("Testing API Clients [AddHistory]", () => {
  it("Add History [Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/client/${datos.idCliente_staging}/history`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        body: userData
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        expect(response.body).to.have.property("status", "success");
        const messages = response.body.messages
        cy.log("message=", messages);
      });
    });
  });
  it.skip("AddHistory[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${datos.idCliente_sandbox}/history`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        body: userData
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        expect(response.body).to.have.property("status", "success");
        const messages = response.body.messages
        cy.log("message=", messages);
      });
    });
  });
  /*it("Agregar nueva Historia[Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.idCliente);
      cy.request({
        //url: `/client/${this.datos.id}/history`,
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${this.datos.idCliente}/history`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("Authorization")}` },
        failOnStatusCode:false,
        body: userData
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property("messages");
        expect(response.body.messages).have.to.eq("client does not exist");
      });
    });
  });*/
})
