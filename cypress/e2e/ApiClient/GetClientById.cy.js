/// <reference types ="Cypress" />

describe("Probando Endpoint para consultar clientes", () => {
  it("Get Client By id [Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.idCliente);
      cy.request({
        url: `${Cypress.env("API_CLIENTS")}/clients/${this.datos.idCliente}`,
        method: "GET",
        headers: {
          "Authorization": `${Cypress.env("Authorization")}`,
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
  it("Get Client By Document[Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS")}/clients/search/identification`,
        method: "POST",
        headers: { 
          "Authorization": `${Cypress.env("Authorization")}`,
        
        },
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
  it("Get Client By id [Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.idCliente);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/${this.datos.idCliente}`,
        method: "GET",
        headers: {
          "Authorization": `${Cypress.env("Authorization")}`,
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
  it("Get Client By Document[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/search/identification`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("Authorization")}`,},
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
  it("Get Client By id [Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.idCliente);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/${this.datos.idCliente_produccion}`,
        method: "GET",
        headers: {
          "Authorization": `${Cypress.env("Authorization")}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(
          response.body.data.identification.identifications[0].number
        ).to.be.equal(this.datos.documento_produccion);
        cy.log(response);
      });
    });
  });

  it("Get Client By Document[Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/search/identification`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("Authorization")}`,},
        body: {
          number: this.datos.documento_produccion,
          type: this.datos.documento_tipo,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.id).to.be.equal(this.datos.idCliente_produccion);
        cy.log(response);
      });
    });
  });
});
