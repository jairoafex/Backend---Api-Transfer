const userData = require("../../fixtures/AddDocuments");
describe("Probando Endpoint para agregar documento al cliente", () => {
  it("Agregar nuevo documentom [Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        // url: `/client/${this.datos.id}/documents`,
        url: `${Cypress.env("API_CLIENTS")}/client/${
          this.datos.idCliente
        }/documents`,
        method: "POST",
        headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}` },
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property("id");
        const id = response.body.data.id;
        cy.log(id);
      });
    });
  });
  it("Agregar nuevo documento[SandBox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        // url: `/client/${this.datos.id}/documents`,
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/${
          this.datos.idCliente
        }/documents`,
        method: "POST",
        headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE_SANDBOX")}` },
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property("id");
        const id = response.body.data.id;
        cy.log(id);
      });
    });
  });
  it("Agregar nuevo documento[Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        // url: `/client/${this.datos.id}/documents`,
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/${
          this.datos.idCliente
        }/documents`,
        method: "POST",
        headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE_PRODUCCION")}` },
        failOnStatusCode:false,
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property("messages");
        expect(response.body.messages).have.to.eq("client does not exist");
      });
    });
  });
});
