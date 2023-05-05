/// <reference types ="Cypress" />
const userData=require('../../fixtures/AddHistory')
describe("Testing API Clients [AddHistory]", () => {
  it("Agregar nueva Historia[Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.idCliente);
      cy.request({
        url: `${Cypress.env("API_CLIENTS")}/client/${this.datos.idCliente}/history`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("Authorization")}` },
        body: userData
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        const messages = response.body.messages
        cy.log("message=", messages);
      });
    });
  });
  it("Agregar nueva Historia[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.idCliente);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${this.datos.idCliente}/history`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("Authorization")}` },
        body: userData
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
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
