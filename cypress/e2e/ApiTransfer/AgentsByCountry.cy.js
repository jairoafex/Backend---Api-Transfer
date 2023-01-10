/// <reference types ="Cypress" />
describe("Probando Endpoint para consultar agentes por pais", () => {
    it("Crear nueva cotizacion",{
        env: {
            api:'https://wo8s5y6tnc.execute-api.us-west-2.amazonaws.com/staging/v1/transfers'
        },
    }, () => {
      cy.fixture("Agentes").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('api')}/agents/${this.datos.country}/${this.datos.city}`,
          method: "GET",
          headers: { "x-api-key": "l48r2vlY0B9BdzsHzym6u3uxnHLug6023pcW203b" }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("status");
          const status = response.body.status
          cy.log("status", status);
        });
      });
    });
  });