/// <reference types ="Cypress" />
describe("Testing Endpoint de pago beneficairio", () => {
  it("Pago beneficiario [Staging]", {}, () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "Authorization": `${Cypress.env("Authorization")}`,
        "x-afex-user-id": 237902165,
        "x-afex-branch-code": "AG",
      },
      failOnStatusCode: false,
      body: {
        corporateCode: 1127208,
        transferCode: "OG80029901",
        paymentToOther:false,
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("status", "error");
      const messages = response.body.message;
      expect(response.body).to.have.property("message", messages);
    });
  });
  it("Pago beneficiario [Sandbox]", {}, () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "Authorization": `${Cypress.env("Authorization")}`,
        "x-afex-user-id": 237902165,
        "x-afex-branch-code": "AG",
      },
      failOnStatusCode: false,
      body: {
        corporateCode: 1127208,
        transferCode: "OG80029901",
        paymentToOther:false,
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("status", "error");
      const messages = response.body.message;
      expect(response.body).to.have.property("message", messages);
    });
  });
  it("Pago beneficiario [Produccion]", {}, () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER_PRODUCCION")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "Authorization": `${Cypress.env("Authorization")}`,
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
      const message = response.body.message;
      expect(response.body).to.have.property("message", message);
    });
  });
});
