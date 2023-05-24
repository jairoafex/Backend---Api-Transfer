/// <reference types ="Cypress" />
describe("Testing API Clients [GetClientDocumentsTypes]", () => {
    it("GetClientDocumentType[Staging]", () => {
        cy.request({
          url: `${Cypress.env("API_CLIENTS")}/clients/fields/person/create`,
          method: "GET",
          headers: {
            "Authorization": `${Cypress.env("Authorization")}`,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages[0]).to.be.equal('fields for person-create')
          const messages = response.body.messages;
          cy.log(messages);
        });
    });
    it("GetClientDocumentType[Sandbox]", () => {
        cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/fields/person/create`,
          method: "GET",
          headers: {
            "Authorization": `${Cypress.env("Authorization")}`,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages[0]).to.be.equal('fields for person-create')
          const messages = response.body.messages;
          cy.log(messages);
        });
    });
    it("GetClientDocumentType[Produccion]", () => {
      cy.request({
          url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/fields/person/create`,
        method: "GET",
        headers: {
          "Authorization": `${Cypress.env("Authorization")}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        expect(response.body.messages[0]).to.be.equal('fields for person-create')
        const messages = response.body.messages;
        cy.log(messages);
      });
  });
  });
  