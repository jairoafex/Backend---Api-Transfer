/// <reference types ="Cypress" />
describe("Testing API Transfer [RecipientsByCustomer]", () => {
    it("Recipients by Customer [Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_STAGING')}/v1/transfers/customers/${this.datos.codigo_cliente}/recipients`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status", "success");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Recipients by Customer [Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/customers/${this.datos.codigo_cliente}/recipients`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status", "success");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Recipients by Customer [Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/customers/${this.datos.codigo_cliente_produccion}/recipients`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status", "success");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Recipients by Customer [Certificacion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_CERTIFICACION')}/v1/transfers/customers/${this.datos.codigo_cliente_produccion}/recipients`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_CERTIFICACION")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status", "success");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
  });