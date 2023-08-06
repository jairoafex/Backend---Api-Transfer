/// <reference types ="Cypress" />
const userData=require('../../fixtures/ActualizarClientsFull')
describe("Testing API Clients [UpdateClientFull]", () => {
    it("UpdateClientFull[Staging]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/full/${datos.idCliente_staging_full}`,
          method: "PATCH",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}`,
                     "x-afex-user-id": 237902165, },
          body: userData
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status", "success");
        });
      });
    });
    it("UpdateClientFull[Sandbox]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/full/${datos.idCliente_sandbox_full}`,
            method: "PATCH",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}`,
                       "x-afex-user-id": 237902165, },
            body: userData
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("status", "success");
          });
        });
      });
      it.skip("UpdateClientFull[Produccion]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/full/${datos.idCliente_produccion}`,
            method: "PATCH",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`,
                       "x-afex-user-id": 237902165, },
            body: userData
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("status", "success");
          });
        });
      });
  });
  