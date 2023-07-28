/// <reference types ="Cypress" />

describe("Testing API Clients", () => {
  it("GetClientByid[Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/${datos.idCliente_staging}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(
          response.body.data.identification.identifications[0].number
        ).to.be.equal(datos.documento_cliente_staging);
        expect(response.body).to.have.property("status", "success");
        cy.log(response);
      });
    });
  });
  it("GetClientByDocument[Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/search/identification`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        body: {
          number: datos.documento_cliente_staging,
          type: datos.tipo,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.id).to.be.equal(datos.idCliente_staging);
        expect(response.body).to.have.property("status", "success");
        cy.log(response);
      });
    });
  });
  it("GetClientByid[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/${this.datos.idCliente_sandbox}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(
          response.body.data.identification.identifications[0].number
        ).to.be.equal(datos.documento_cliente_sandbox);
        cy.log(response);
      });
    });
  });
  it("GetClientByDocument[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/search/identification`,
        method: "POST",
headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        body: {
          number: datos.documento_cliente_sandbox,
          type: datos.tipo,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.id).to.be.equal(datos.idCliente_sandbox);
        expect(response.body).to.have.property("status", "success");
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
          "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(
          response.body.data.identification.identifications[0].number
        ).to.be.equal(this.datos.documento_produccion);
        expect(response.body).to.have.property("status", "success");
        cy.log(response);
      });
    });
  });

  it.skip("GetClientByDocument[Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/search/identification`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`,},
        body: {
          number: this.datos.documento_produccion,
          type: this.datos.documento_tipo,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.id).to.be.equal(datos.idCliente_produccion);
        expect(response.body).to.have.property("status", "success");
        cy.log(response);
      });
    });
  });
});
