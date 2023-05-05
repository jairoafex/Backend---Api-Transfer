/// <reference types ="Cypress" />
describe("Testing API Clients [Similarity]", () => {
    it("Validando similitud[Sandbox]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/similarity-assessment`,
            method: "POST",
            headers: {
              "Authorization": `${Cypress.env("Authorization")}`,
            },
            body: {
              status: this.datos.status,
              birthday:this.datos.birthday,
              identification:this.datos.identification,
              name:this.datos.name
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("messages");
            const messages = response.body.messages;
            cy.log(messages);
          });
        });
      });
      it("Validando similitud[Staging]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_CLIENTS")}/clients/similarity-assessment`,
            method: "POST",
            headers: {
              "Authorization": `${Cypress.env("Authorization")}`,
            },
            body: {
              status: this.datos.status,
              birthday:this.datos.birthday,
              identification:this.datos.identification,
              name:this.datos.name
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("messages");
            const messages = response.body.messages;
            cy.log(messages);
          });
        });
      });
  });
  