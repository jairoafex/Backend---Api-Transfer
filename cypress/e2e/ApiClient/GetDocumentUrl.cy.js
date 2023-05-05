/// <reference types ="Cypress" />
describe("Probando Endpoint para agregar documento al cliente", () => {
    it("Get document Content[Staging]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
            url: `${Cypress.env("API_CLIENTS")}/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("Authorization")}`
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("data")
            const id=response.body.data.id
            cy.log(id)
          });
        });
  });
  it("Get document Content[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${this.datos.idCliente}/documents/${this.datos.idDocumentSandbox}/url`,
        method: "GET",
        headers: { 
          "Authorization": `${Cypress.env("Authorization")}`
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("data")
        const id=response.body.data.id
        cy.log(id)
      });
    });
});
it("Get document Content[Produccion]", () => {
  cy.fixture("data_test").then(function (datos) {
    this.datos = datos;
    cy.log("Data", this.datos.id);
    cy.request({
      //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
      url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${this.datos.idCliente_produccion}/documents/${this.datos.idDocumentSandbox}/url`,
      method: "GET",
      failOnStatusCode:false,
      headers: { 
        "Authorization": `${Cypress.env("Authorization")}`
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("messages");
      expect(response.body.messages).have.to.eq("client does not have a document with the id provided");
    });
  });
});
})