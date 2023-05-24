const userData = require("../../fixtures/AddDocuments");
describe("Testing API Clients [AddDocument]", () => {
  it("Add Document [Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        // url: `/client/${this.datos.id}/documents`,
        url: `${Cypress.env("API_CLIENTS")}/client/${
          this.datos.idCliente
        }/documents`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("Authorization")}` },
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property("id");
        const id = response.body.data.id;
        cy.log(id);
      });
    });
  });
  it("Add Document [SandBox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        // url: `/client/${this.datos.id}/documents`,
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${
          this.datos.idCliente
        }/documents`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("Authorization")}`  },
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property("id");
        const id = response.body.data.id;
        cy.log(id);
      });
    });
  });
});
