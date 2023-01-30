/// <reference types ="Cypress" />
const userData=require('../../fixtures/CreateClient')
describe("Testing API service [createClient]", () => {
    it("Test #1 : Create new client",()=>{
    cy.request({
        url: `${Cypress.env("API_CLIENTS")}/clients`,
        method: "POST",
        headers: {  "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}`},
        body: userData
    }
    ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.identification.identifications[0].number).to.be.equal(userData.identification.identification.number)
        expect(response.body).to.have.property('messages', 'client created')
        expect(response.body.data).to.have.property('id')
        cy.log(response.body.data.id);
      });
    })
})