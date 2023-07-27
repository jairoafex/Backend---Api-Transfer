const userData = require("../../fixtures/AddDocuments");
describe("Testing API Clients [AddDocument]", () => {
  it("Add Document [Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/client/${datos.idCliente_staging}/documents`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property("id");
        expect(response.body).to.have.property("status", "success");
        const id = response.body.data.id;
        cy.log(id);
      });
    });
  });
  it("Add Document [SandBox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${datos.idCliente_sandbox}/documents`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}`  },
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property("id");
        expect(response.body).to.have.property("status", "success");
        const id = response.body.data.id;
        cy.log(id);
      });
    });
  });
});
