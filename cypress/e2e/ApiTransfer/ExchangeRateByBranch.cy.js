/// <reference types ="Cypress" />
describe("Testing API Transfer [ExchangeRateByBranch]", () => {
    it("Exchange by rate [Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/exchangeRate/${this.datos.branchCode}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("Authorization")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("data");
          const data = response.body.data
          cy.log("data", data);
        });
      });
    });
    it("Exchange by rate [Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/exchangeRate/${this.datos.branchCode}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("Authorization")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("data");
          const data = response.body.data
          cy.log("data", data);
        });
      });
    });
    it("Exchange by rate [Produccion]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_PRODUCCION')}/v1/transfers/exchangeRate/${this.datos.branchCode}`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("Authorization")}` }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("data");
          const data = response.body.data
          cy.log("data", data);
        });
      });
    });
  });