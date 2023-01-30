/// <reference types ="Cypress" />

describe("Probando Endpoint para consultar clientes", () => {
  it("Get Client By id", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.idCliente);
      cy.request({
        url: `${Cypress.env("API_CLIENTS")}/clients/${this.datos.idCliente}`,
        method: "GET",
        headers: {
          "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(
          response.body.data.identification.identifications[0].number
        ).to.be.equal(this.datos.documento);
        cy.log(response);
      });
    });
  });
  it("Get Client By Document", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS")}/clients/search/identification`,
        method: "POST",
        headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}`,},
        body: {
          number: this.datos.documento,
          type: this.datos.tipo,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.id).to.be.equal(this.datos.idCliente);
        cy.log(response);
      });
    });
  });
});
