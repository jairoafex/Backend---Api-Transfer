/// <reference types ="Cypress" />
describe("Testing API Transfer [ExchagesRates]", () => {
    it("ExchangesRates[Staging]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/agents/exchangeRates`,
          method: "GET",
          headers: { 
            "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`,
            "x-afex-user-id": 237902165,
            "x-afex-branch-code": "AG",
        }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("message");
          expect(response.body.message).to.be.equal('Agents exchange rates')
          const messages = response.body.message
          cy.log("message=", messages);
        });
      });
    });
    it("Exchanges Rates [Sandbox]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER_SANDBOX")}/v1/transfers/agents/exchangeRates`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}`,
              "x-afex-user-id": 237902165,
              "x-afex-branch-code": "AG",
          }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.be.equal('Agents exchange rates')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });
      it("ExchangesRates[Produccion]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER_PRODUCCION")}/v1/transfers/agents/exchangeRates`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}`,
              "x-afex-user-id": 237902165,
              "x-afex-branch-code": "AG",
          }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.be.equal('Agents exchange rates')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });
      it("ExchangesRates[Certificacion]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER_CERTIFICACION")}/v1/transfers/agents/exchangeRates`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_CERTIFICACION")}`,
              "x-afex-user-id": 237902165,
              "x-afex-branch-code": "AG",
          }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.be.equal('Agents exchange rates')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });
  });