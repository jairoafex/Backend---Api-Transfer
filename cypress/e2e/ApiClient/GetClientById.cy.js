/// <reference types ="Cypress" />

describe("Probando Endpoint para consultar cliente por ID", () => {
  it("Get Client By id", () => {
    cy.fixture("ClientesCreados").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS")}/clients/${this.datos.id}`,
        //url: `/clients/${this.datos.id}`,
        method: "GET",
        headers: {
          "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(
          response.body.data.identification.identifications[1].number
        ).to.be.equal(this.datos.documento);
        cy.log(response);
      });
    });
  });
  it("Get Client By Documento", () => {
    cy.fixture("ClientesCreados").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: "/clients/search/identification",
        method: "POST",
        headers: { "x-api-key": "9RubKS6Sir1pNh1Mv7Zhp8JDxIoOkn0VnSKjQs25" },
        body: {
          number: this.datos.documento,
          type: this.datos.tipo,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.id).to.be.equal(this.datos.id);
        cy.log(response);
      });
    });
  });
});
