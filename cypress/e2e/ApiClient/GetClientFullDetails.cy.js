/// <reference types ="Cypress" />
describe("Testing API Clients [GetClientFullDetails]", () => {
    it("GetClientFullDetails[Staging]", () => {
      cy.fixture("data_test").then(function(datos){
        this.datos=datos
        cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/full/${datos.idCliente_staging}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
        expect(response.body).to.have.property("status", "success");
      });
      })
    });
    it("GetClientFullDetails[Sandbox]", () => {
      cy.fixture("data_test").then(function(datos){
        this.datos=datos
        cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/full/${datos.idCliente_sandbox}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
        expect(response.body).to.have.property("status", "success");
      });
      })
    });
    it.skip("GetClientFullDetails[Produccion]", () => {
      cy.fixture("data_test").then(function(datos){
        this.datos=datos
        cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/full/${datos.idCliente_produccion}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
        expect(response.body).to.have.property("status", "success");
      });
      })
    });
  });
  