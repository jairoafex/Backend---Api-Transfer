/// <reference types ="Cypress" />
describe("ExchangesRates", () => {
    it.only("Exchange Rate[Staging]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_TRANSFER")}/v1/transfers/agents/exchangeRates`,
          method: "GET",
          headers: { 
            "Authorization": `${Cypress.env("Authorization")}`,
            "x-afex-user-id": 237902165,
            "x-afex-branch-code": "AG",
        }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          expect(response.body.messages).to.be.equal('success')
          const messages = response.body.messages
          cy.log("message=", messages);
        });
      });
    });
    it.only("Exchange Rate[Sandbox]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER_SANDBOX")}/v1/transfers/agents/exchangeRates`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("Authorization")}`,
              "x-afex-user-id": 237902165,
              "x-afex-branch-code": "AG",
          }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("messages");
            expect(response.body.messages).to.be.equal('success')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });
  });