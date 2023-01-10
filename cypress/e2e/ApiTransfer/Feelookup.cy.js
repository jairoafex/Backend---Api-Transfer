/// <reference types ="Cypress" />
describe("Probando Endpoint para realizar cotizacion", () => {
    it("Crear nueva cotizacion",{
        env: {
            api:'https://wo8s5y6tnc.execute-api.us-west-2.amazonaws.com/staging/v1/transfers'
        },
    }, () => {
      cy.fixture("Feelookup").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('api')}/feelookup/`,
          method: "POST",
          headers: { "x-api-key": "l48r2vlY0B9BdzsHzym6u3uxnHLug6023pcW203b" },
          body: {
            amount: this.datos.amount,
            branchId: this.datos.branchId,
            branchCode: this.datos.branchCode,
            receiverCountry: this.datos.receiverCountry,
            receiverCity: this.datos.receiverCity,
            includeFee: this.datos.includeFee,
            methodPayment: this.datos.methodPayment,
            originCurrency: this.datos.originCurrency
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("id");
          const id = response.body.data.id
          cy.log("id", id);
        });
      });
    });
  });
  