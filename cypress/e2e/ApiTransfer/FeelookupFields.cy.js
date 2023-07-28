/// <reference types ="Cypress" />
describe("Testing API Transfer [Feelookup Fields]", () => {
    it("FeelookupFields[Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_STAGING')}/v1/transfers/feelookup/fields`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}` },
          body: {   
            feelookupId: this.datos.idCotizacion,
            quoteId: this.datos.idquote, 
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
    it("FeelookupFields[Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/feelookup/fields`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}` },
          body: {   
            feelookupId: this.datos.idCotizacion_sanbox,
            quoteId: this.datos.idquote, 
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
  });
  