/// <reference types ="Cypress" />
describe("Testing API Clients [GetClientFullFields]", () => {
    it("GetClientFullFields[Staging]", () => {
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/full/fields?type=person&risk=normal`,
      method: "GET",
      headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
      expect(response.body).to.have.property("status", "success");
    });
    });
    it("GetClientFullFields[Sandbox]", () => {
        cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/full/fields?type=person&risk=normal`,
          method: "GET",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
          expect(response.body).to.have.property("status", "success");
        });
    });
    it("GetClientFullFields[Produccion]", () => {
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/full/fields?type=person&risk=normal`,
        method: "GET",
       headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
        expect(response.body).to.have.property("status", "success");
      });
    });
  });
  