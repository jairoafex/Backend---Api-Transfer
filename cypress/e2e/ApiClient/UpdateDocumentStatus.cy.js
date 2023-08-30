/// <reference types ="Cypress" />
describe("Testing API Clients [UpdateDocumentStatus]", () => {
  it("Update Documen Status [Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/client/${this.datos.idCliente_staging}/documents/${this.datos.idDocument_staging}/status`,
        method: "PUT",
        failOnStatusCode:false,
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        body: {
          action: datos.actionFlow_documents,
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property("messages");
        expect(response.body.messages).have.to.eq("La acción RECHAZAR no es válida para el estado RECHAZADO. Las acciones válidas son: AUTORIZAR, DESHABILITAR.");
        const messages = response.body.messages;
        cy.log(messages);
      });
    });
  });
  it("Update Documen Status [Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${this.datos.idCliente_sandbox}/documents/${this.datos.idDocument_sandbox}/status`,
        method: "PUT",
        failOnStatusCode:false,
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        body: {
          action: datos.actionFlow_documents,
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property("messages");
        //expect(response.body.messages).have.to.eq("La acción RECHAZAR no es válida para el estado RECHAZADO. Las acciones válidas son: AUTORIZAR, DESHABILITAR.");
        const messages = response.body.messages;
        cy.log(messages);
      });
    });
  });
  it.skip("Update Documen Status [Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${this.datos.idCliente_produccion}/documents/${this.datos.idDocumentSandbox}/status`,
        method: "PUT",
        failOnStatusCode:false,
        headers: {
          "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`,
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
