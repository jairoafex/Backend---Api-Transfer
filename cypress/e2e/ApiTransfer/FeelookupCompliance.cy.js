/// <reference types ="Cypress" />
describe("Probando Endpoint para validar cumplimiento en cotizacion", () => {
    it("Validar cumplimiento en cotizacion",{
    }, () => {
      cy.fixture("Cotizaciones").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/compliance`,
          method: "POST",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` },
          body: {
            
            feelookupId: this.datos.id,
            quoteId: this.datos.idquote,
            corporateCode: this.datos.idCliente
            
          },
        }).then((response) => {
          //expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          const messages = response.body.messages
          cy.log("messages", messages);
        });
      });
    });
  });