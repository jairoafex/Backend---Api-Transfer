/// <reference types ="Cypress" />
describe("Probando Endpoint para obtener campos adiciones segun cotizacion", () => {
    it("Crear nueva cotizacion",{
        env: {
            api:'https://wo8s5y6tnc.execute-api.us-west-2.amazonaws.com/staging/v1/transfers'
        },
    }, () => {
      cy.fixture("Cotizaciones").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('api')}/feelookup/fields`,
          method: "POST",
          headers: { "x-api-key": "l48r2vlY0B9BdzsHzym6u3uxnHLug6023pcW203b" },
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
  