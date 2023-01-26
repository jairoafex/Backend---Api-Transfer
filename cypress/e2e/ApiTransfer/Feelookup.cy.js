/// <reference types ="Cypress" />
describe("Probando Endpoint para realizar cotizacion", () => {
    it("Crear nueva cotizacion",{
    }, () => {
      cy.fixture("Feelookup").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/`,
          method: "POST",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` },
          body: {
            amount: this.datos.amount,
            branchId: this.datos.branchId,
            branchCode: this.datos.branchCode,
            receiverCountry: this.datos.receiverCountry,
            receiverCity: this.datos.receiverCity,
            includeFee: this.datos.includeFee,
            methodPayment: this.datos.methodPayment,
            originCurrency: this.datos.originCurrency,
            promocode: this.datos.promocode
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
  