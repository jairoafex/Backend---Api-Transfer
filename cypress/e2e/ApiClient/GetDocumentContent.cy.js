/// <reference types ="Cypress" />
describe("Testing API Clients [GetDocumentContent]", () => {
    it("GetdocumentContent[Staging]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_CLIENTS_STAGING")}/client/${datos.idCliente_staging}/documents/${datos.idDocument_staging}`,
            method: "GET",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.be.equal('image/jpeg')
          });
        });
  });
  it("Get document Content[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${datos.idCliente_sandbox}/documents/${datos.idDocument_sandbox}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers['content-type']).to.be.equal('image/jpeg')
      });
    });
});
it("Get document Content[Produccion]", () => {
  cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.id);
    cy.request({
      url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${this.datos.idCliente_produccion_document}/documents/${this.datos.idDocument_produccion}`,
      method: "GET",
      failOnStatusCode:false,
      headers: { 
        "Authorization": `${Cypress.env("API_CLIENTS_PRODUCCION")}`
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.be.equal('application/pdf')
    });
  });
});
it.skip("Get document Content[Certificacion]", () => {
  cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.id);
    cy.request({
      url: `${Cypress.env("API_CLIENTS_CERTIFICACION")}/client/${this.datos.idCliente_produccion_document}/documents/${this.datos.idDocument_produccion}`,
      method: "GET",
      failOnStatusCode:false,
      headers: { 
        "Authorization": `${Cypress.env("API_CLIENTS_CERTIFICACION")}`
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.be.equal('application/pdf')
    });
  });
});
})