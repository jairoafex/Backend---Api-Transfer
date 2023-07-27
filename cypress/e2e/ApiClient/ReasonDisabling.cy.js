/// <reference types ="Cypress" />
describe("Testing API Clients [ReasonDisabling]", () => {
    it("ReasonDisabling[Staging]", () => {
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/reasons/disabling`,
      method: "GET",
      headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.messages[0]).to.be.equal('reasons disabling')
      expect(response.body).to.have.property("status", "success");
    });
    });
    it("ReasonDisabling[Sandbox]", () => {
        cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/reasons/disabling`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.messages[0]).to.be.equal('reasons disabling')
          expect(response.body).to.have.property("status", "success");
        });
    });
    it("ReasonDisabling[Produccion]", () => {
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/reasons/disabling`,
        method: "GET",
       headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('reasons disabling')
        expect(response.body).to.have.property("status", "success");
      });
    });
  });