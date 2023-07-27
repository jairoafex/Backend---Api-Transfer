/// <reference types ="Cypress" />
describe("Testing API Transfer [ReceiveFields]", () => {
    it("ReceiveFields[Staging]", {}, () => {
      cy.request({
        url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/receive/fields`,
        method: "POST",
        headers: {
          "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`,
        },
        body: {
          agentCode: "XM",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("status", "success");
        expect(response.body.message).to.eq('Fields for receive')
      });
    });
    it("ReceiveFields[Sandbox]", {}, () => {
        cy.request({
          url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/receive/fields`,
          method: "POST",
          headers: {
            "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}`,
          },
          body: {
            agentCode: "XM",
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status", "success");
          expect(response.body.message).to.eq('Fields for receive')
        });
      });
      it("ReceiveFields[Produccion]", {}, () => {
        cy.request({
          url: `${Cypress.env("API_TRANSFER_PRODUCCION")}/v1/transfers/receive/fields`,
          method: "POST",
          headers: {
            "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}`,
          },
          body: {
            agentCode: "XM",
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status", "success");
          expect(response.body.message).to.eq('Fields for receive')
        });
      });
  });
  