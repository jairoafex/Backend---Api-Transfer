/// <reference types ="Cypress" />
describe("Probando Endpoint para actualizar estado del documento", () => {
  it("Actualizando estado del documento [Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS")}/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/status`,
        method: "PUT",
        headers: {
          "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}`,
        },
        body: {
          status: this.datos.status,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        const messages = response.body.messages;
        cy.log(messages);
      });
    });
  });
  it("Actualizando estado del documento [Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${this.datos.idCliente}/documents/${this.datos.idDocumentSandbox}/status`,
        method: "PUT",
        headers: {
          "x-api-key": `${Cypress.env("API_CLIENTS_VALUE_SANDBOX")}`,
        },
        body: {
          status: this.datos.status,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        const messages = response.body.messages;
        cy.log(messages);
      });
    });
  });
  it("Actualizando estado del documento [Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${this.datos.idCliente_produccion}/documents/${this.datos.idDocumentSandbox}/status`,
        method: "PUT",
        failOnStatusCode:false,
        headers: {
          "x-api-key": `${Cypress.env("API_CLIENTS_VALUE_PRODUCCION")}`,
        },
        body: {
          status: this.datos.status,
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property("messages");
        expect(response.body.messages).have.to.eq("client does not have a document with the id provided");
      });
    });
  });
});
