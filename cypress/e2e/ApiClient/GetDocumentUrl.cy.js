/// <reference types ="Cypress" />
describe("Testing API Clients [GetDocumentURL]", () => {
    it("GetDocumentUrl[Staging]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_CLIENTS_STAGING")}/client/${datos.idCliente_staging}/documents/${datos.idDocument_staging}/url`,
            method: "GET",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("data")
            expect(response.body).to.have.property("status", "success");
            const id=response.body.data.id
          });
        });
  });
  it("GetDocumentUrl[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${this.datos.idCliente_sandbox}/documents/${this.datos.idDocument_sandbox}/url`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("data")
        expect(response.body).to.have.property("status", "success");
        const id=response.body.data.id
        cy.log(id)
      });
    });
});
it("GetDocumentUrl[Produccion]", () => {
  cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.id);
    cy.request({
      //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
      url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${this.datos.idCliente_produccion_document}/documents/${this.datos.idDocument_produccion}/url`,
      method: "GET",
      //failOnStatusCode:false,
      headers: { 
        "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data")
      expect(response.body).to.have.property("status", "success");
    });
  });
});
it("GetDocumentUrl[Certificacion]", () => {
  cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.id);
    cy.request({
      //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
      url: `${Cypress.env("API_CLIENTS_CERTIFICACION")}/client/${this.datos.idCliente_produccion_document}/documents/${this.datos.idDocument_produccion}/url`,
      method: "GET",
      //failOnStatusCode:false,
      headers: { 
        "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_CERTIFICACION")}`
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data")
      expect(response.body).to.have.property("status", "success");
    });
  });
});
})