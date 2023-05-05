/// <reference types ="Cypress" />
describe("Probando Endpoint para obtener campos adiciones segun cotizacion", () => {
    it("Feelookup Fields [Staging]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/fields`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("Authorization")}` },
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
    it("Feelookup Fields [Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/feelookup/fields`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("Authorization")}` },
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
  