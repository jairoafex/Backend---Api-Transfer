/// <reference types ="Cypress" />
describe("Testing API Transfer [CancelFields]", () => {
    it("CancelFields[Staging]", () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/${this.datos.codigo_giro_staging}/cancel/fields`,
          method: "GET",
          headers: { 
            "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`,
        }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("message");
          expect(response.body.message).to.be.equal('Fields for cancel')
          const messages = response.body.messages
          cy.log("message=", messages);
        });
      });
    });
    it("CancelFields[Sandbox]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER_SANDBOX")}/v1/transfers/${this.datos.codigo_giro_sandbox}/cancel/fields`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}`,
          }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.be.equal('Fields for cancel')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });

      it("CancelFields[Produccion]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER_PRODUCCION")}/v1/transfers/${this.datos.codigo_giro_produccion}/cancel/fields`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}`,
          }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.be.equal('Fields for cancel')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });
      it("CancelFields[Certificacion]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_TRANSFER_CERTIFICACION")}/v1/transfers/${this.datos.codigo_giro_produccion}/cancel/fields`,
            method: "GET",
            headers: { 
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_CERTIFICACION")}`,
          }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.be.equal('Fields for cancel')
            const messages = response.body.messages
            cy.log("message=", messages);
          });
        });
      });


  });