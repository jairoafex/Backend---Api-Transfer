/// <reference types ="Cypress" />
describe("Testing API Transfer [AgentsConditions]", () => {
    it("AgentsConditions [Stating]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_STAGING')}/v1/transfers/agent/${this.datos.branchCode}/conditions/${this.datos.country}/${this.datos.city}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Agents Conditions [Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/agent/${this.datos.branchCode}/conditions/${this.datos.country}/${this.datos.city}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Agents Conditions [Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/agent/${this.datos.branchCode}/conditions/${this.datos.country}/${this.datos.city}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("Agents Conditions [Certificacion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_CERTIFICACION')}/v1/transfers/agent/${this.datos.branchCode}/conditions/${this.datos.country}/${this.datos.city}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_CERTIFICACION")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
  });