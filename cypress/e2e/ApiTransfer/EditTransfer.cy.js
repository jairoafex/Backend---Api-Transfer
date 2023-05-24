/// <reference types ="Cypress" />
const userData=require('../../fixtures/EditTransfer')
describe("Testing API Transfer [EditTransfers]", () => {
    it.only("Edit Transfers [Sandbox]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_TRANSFER_SANDBOX")}/v1/transfers/${this.datos.codigo_giro_sandbox}`,
          method: "PATCH",
          headers: { 
            "Authorization": `${Cypress.env("Authorization")}`,
            "x-afex-user-id": 237902165,
            "x-afex-branch-code": "AG",
        },
          body: userData
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("message");
          expect(response.body.message).to.be.equal('Transfer edited')
          const messages = response.body.messages
          cy.log("message=", messages);
        });
      });
    });
    it.only("Edit Transfers [Staging]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER")}/v1/transfers/${this.datos.codigo_giro_sandbox}`,
            method: "PATCH",
            headers: { 
              "Authorization": `${Cypress.env("Authorization")}`,
              "x-afex-user-id": 237902165,
              "x-afex-branch-code": "AG",
          },
            body: userData
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.be.equal('Transfer edited')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });
  });