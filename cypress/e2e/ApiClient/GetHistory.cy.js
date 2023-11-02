/// <reference types ="Cypress" />
describe("Testing API Clients [GetHistory]", () => {
  it("GetHistory[Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/client/${datos.idCliente_staging}/history`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        expect(response.body).to.have.property("status", "success");
        const messages = response.body.messages;
        cy.log(messages);
      });
    });
  });
  it("GetHistory[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        //url: `/client/${this.datos.idCliente}/history`,
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${datos.idCliente_sandbox}/history`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        expect(response.body).to.have.property("status", "success");
        const messages = response.body.messages;
        cy.log(messages);
      });
    });
  });
  it("Get History [Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        //url: `/client/${this.datos.idCliente}/history`,
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${datos.idCliente_produccion}/history`,
        method: "GET",
        headers: {
          "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        expect(response.body).to.have.property("status", "success");
      });
    });
  });
});
