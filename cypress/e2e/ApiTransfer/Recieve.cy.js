/// <reference types ="Cypress" />
describe("Testing API Transfer [Receive]", () => {
  it("Receive [Staging]", () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`,
        "x-afex-user-id": 237902165,
        "x-afex-branch-code": "AG",
      },
      failOnStatusCode: false,
      body: {
        corporateCode: 1127208,
        transferCode: "OG80029901",
        paymentToOther:false,
        /*branchId:23,
        identificationType:"RUT",
        identification: "239039332",
        userFullName: "Jairo Bermudez"*/

      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("status", "error");
      expect(response.body.description).to.contains('No se logró pagar el giro')
    });
  });
  it("Receive [Sandbox]", () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER_SANDBOX")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}`,
        "x-afex-user-id": 237902165,
        "x-afex-branch-code": "AG",
      },
      failOnStatusCode: false,
      body: {
        corporateCode: 1127720,
        transferCode: "OG80029901",
        paymentToOther:false,
        branchId:23,
        identificationType:"RUT",
        identification: "239039332",
        userFullName: "Jairo Bermudez"
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("status", "compliance");
      expect(response.body.description).to.contains('Transfer have not been approved by Compliance')
    });
  });
  it.skip("Receive[Produccion]", () => {
    cy.request({
      url: `${Cypress.env("API_TRANSFER_PRODUCCION")}/v1/transfers/receive`,
      method: "POST",
      headers: {
        "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}`,
        "x-afex-user-id": 237902165,
        "x-afex-branch-code": "AG",
      },
      failOnStatusCode: false,
      body: {
        corporateCode: 1127208,
        transferCode: "OG80029901",
        paymentToOther:false,
        branchId:23,
        identificationType:"RUT",
        identification: "239039332",
        userFullName: "Jairo Bermudez"
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("status", "compliance");
      expect(response.body.description).to.contains('Transfer have not been approved by Compliance')
    });
  });
});
