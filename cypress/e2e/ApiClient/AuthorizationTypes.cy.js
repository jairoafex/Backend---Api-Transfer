/// <reference types ="Cypress" />
describe("Testing API Clients [AuthorizationTypes]", () => {
  it("AuthorizationTypes[Staging]", () => {
    cy.request({
      url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/authorization/types`,
      method: "GET",
      headers: { Authorization: `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("status", "success");
      const messages = response.body.messages;
      cy.log(messages);
    });
  });
  it("AuthorizationTypes[Sandbox]", () => {
    cy.request({
      url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/authorization/types`,
      method: "GET",
      headers: { Authorization: `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("status", "success");
      const messages = response.body.messages;
      cy.log(messages);
    });
  });
  it("AuthorizationTypes[Produccion]", () => {
    cy.request({
      url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/authorization/types`,
      method: "GET",
      headers: { Authorization: `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("status", "success");
      const messages = response.body.messages;
      cy.log(messages);
    });
  });
});
