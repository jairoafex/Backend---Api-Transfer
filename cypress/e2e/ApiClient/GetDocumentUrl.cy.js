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
  it("Get document Content[Sandbox]", () => {
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
it.skip("Get document Content[Produccion]", () => {
  cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.id);
    cy.request({
      //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
      url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${this.datos.idCliente_produccion}/documents/${this.datos.idDocumentSandbox}/url`,
      method: "GET",
      failOnStatusCode:false,
      headers: { 
        "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("messages");
      expect(response.body.messages).have.to.eq("client does not have a document with the id provided");
    });
  });
});
})