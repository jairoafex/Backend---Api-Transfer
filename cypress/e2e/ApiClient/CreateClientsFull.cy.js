/// <reference types ="Cypress" />

describe("Testing API Clients [CreateClientFull]", () => {
    it("CreateClientFull[Staging]",()=>{
    const userData=require('../../fixtures/CreateClientFull')
    cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/full`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}`,
                   "x-afex-user-id": 237902165 },
        body: userData
    }
    ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("status", "success");
        expect(response.body.data).to.have.property('id')
        cy.log(response.body.data.id);
      });
    })
    it("CreateClientFull[Sandbox]",()=>{
      const userData=require('../../fixtures/CreateClientFull_sandbox')
      cy.request({
          url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/full`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}`,
                     "x-afex-user-id": 237902165 },
          body: userData
      }
      ).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status", "success");
          expect(response.body.data).to.have.property('id')
          cy.log(response.body.data.id);
        });
      })
})