/// <reference types ="Cypress" />
describe("Testing API Clients [Similarity]", () => {
    it("SimilarityAssesment[Sandbox]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/similarity-assessment`,
            method: "POST",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
            body: {
              birthday:datos.birthday,
              countryCode:datos.countryCode,
              identification:datos.identification,
              name:datos.name
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("messages");
            const messages = response.body.messages;
            cy.log(messages);
          });
        });
      });
      it("SimilarityAssesment[Staging]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/similarity-assessment`,
            method: "POST",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
            body: {
              status: datos.status,
              birthday:datos.birthday,
              countryCode:datos.countryCode,
              identification:datos.identification,
              name:datos.name
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("messages");
            const messages = response.body.messages;
            cy.log(messages);
          });
        });
      });
      it.skip("SimilarityAssesment[Produccion]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/similarity-assessment`,
            method: "POST",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
            body: {
              birthday:datos.birthday_produccion,
              identification:datos.identification_produccion,
              countryCode:datos.countryCode_produccion,
              name:datos.name_produccion
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("messages");
            const messages = response.body.messages;
            cy.log(messages);
          });
        });
      });
      it.skip("SimilarityAssesment[Certificacion]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_CLIENTS_CERTIFICACION")}/clients/similarity-assessment`,
            method: "POST",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
            body: {
              birthday:datos.birthday_produccion,
              identification:datos.identification_produccion,
              countryCode:datos.countryCode_produccion,
              name:datos.name_produccion
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
  