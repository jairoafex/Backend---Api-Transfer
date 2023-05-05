/// <reference types ="Cypress" />
describe("Cancel fields", () => {
    it.only("CancelFields[Staging]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_TRANSFER")}/v1/transfers/${this.datos.codigo_giro_sandbox}/cancel/fields`,
          method: "GET",
          headers: { 
            "Authorization": `${Cypress.env("Authorization")}`,
        }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages).to.be.equal('fields for cancel')
          const messages = response.body.messages
          cy.log("message=", messages);
        });
      });
    });
    it.only("CancelFields[Sandbox]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER_SANDBOX")}/v1/transfers/${this.datos.codigo_giro_sandbox}/cancel/fields`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("Authorization")}`,
          }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("messages");
            expect(response.body.messages).to.be.equal('fields for cancel')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });
  });