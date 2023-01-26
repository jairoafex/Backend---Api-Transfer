/// <reference types ="Cypress" />
describe("Probando Endpoint para obtener campos adiciones segun cotizacion", () => {
    it("Validar segun tipo de cotizacion la relacion de campos adicionales",{
        env: {
            api:'https://wo8s5y6tnc.execute-api.us-west-2.amazonaws.com/staging/v1/transfers'
        },
    }, () => {
      cy.fixture("Cotizaciones").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/fields`,
          method: "POST",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` },
          body: {   
            feelookupId: this.datos.id,
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
  