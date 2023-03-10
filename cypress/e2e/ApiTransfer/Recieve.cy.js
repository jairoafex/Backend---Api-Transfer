/// <reference types ="Cypress" />
describe("Testing Endpoint de pago beneficairio", () => {
  it("Pago beneficiario [Staging]", {}, () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}`,
        "x-afex-user-id": 237902165,
        "x-afex-branch-code": "AG",
      },
      failOnStatusCode: false,
      body: {
        corporateCode: 1127208,
        transferCode: "OG80029901",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("status", "error");
      const messages = response.body.messages;
      expect(response.body).to.have.property("messages", messages);
    });
  });
  it("Pago beneficiario [Sandbox]", {}, () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}`,
        "x-afex-user-id": 237902165,
        "x-afex-branch-code": "AG",
      },
      failOnStatusCode: false,
      body: {
        corporateCode: 1127208,
        transferCode: "OG80029901",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("status", "error");
      const messages = response.body.messages;
      expect(response.body).to.have.property("messages", messages);
    });
  });
  it("Pago beneficiario [Produccion]", {}, () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER_PRODUCCION")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "x-api-key": `${Cypress.env("API_TRANSFER_VALUE_PRODUCCION")}`,
        "x-afex-user-id": 237902165,
        "x-afex-branch-code": "AG",
      },
      failOnStatusCode: false,
      body: {
        corporateCode: 1127208,
        transferCode: "AG30151203",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("status", "error");
      const messages = response.body.messages;
      expect(response.body).to.have.property("messages", messages);
    });
  });
});
