/// <reference types ="Cypress" />

describe("Testing API Clients [CreateClient]", () => {
    it("CreateClient[Staging]",()=>{
    const userData=require('../../fixtures/CreateClient')
    cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients`,
        method: "POST",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        body: userData
    }
    ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.identification.identifications[0].number).to.be.equal(userData.identification.identification.number)
        expect(response.body.messages[0]).to.be.equal('client created')
        expect(response.body.data).to.have.property('id')
        cy.log(response.body.data.id);
      });
    })
    it("CreatenewClient[Sandbox]",()=>{
        const userData=require('../../fixtures/CreateClient_sandbox')
        cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients`,
            method: "POST",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
            body: userData
        }
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.identification.identifications[0].number).to.be.equal(userData.identification.identification.number)
            expect(response.body.messages[0]).to.be.equal('client created')
            expect(response.body.data).to.have.property('id')
            cy.log(response.body.data.id);
          });
        })
})