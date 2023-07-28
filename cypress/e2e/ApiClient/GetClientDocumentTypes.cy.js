/// <reference types ="Cypress" />
describe("Testing API Clients [GetClientDocumentsTypes]", () => {
    it("GetClientDocumentType[Staging]", () => {
        cy.request({
          url: `${Cypress.env("API_CLIENTS_STAGING")}/client/documents/types`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages).to.be.equal('list of documents')
          const messages = response.body.messages;
          cy.log(messages);
        });
    });
    it("GetClientDocumentType[Sandbox]", () => {
        cy.request({
          url: `${Cypress.env("API_CLIENTS_SANDBOX")}/client/documents/types`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages).to.be.equal('list of documents')
          const messages = response.body.messages;
          cy.log(messages);
        });
    });
    it.skip("GetClientDocumentType[produccion]", () => {
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/client/documents/types`,
        method: "GET",
        headers: {
          "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        expect(response.body.messages).to.be.equal('list of documents')
        const messages = response.body.messages;
        cy.log(messages);
      });
  });
  });
  