/// <reference types ="Cypress" />
describe("Probando Endpoint para crear tarea de cumplimiento", () => {
    it("Crear tarea de cumplimiento para cotizacion",{
    }, () => {
      cy.fixture("Cotizaciones").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/compliance/create`,
          method: "POST",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` },
          body: {
            
            feelookupId: this.datos.id,
            branchName: this.datos.branchName,
            cityName: this.datos.cityName,
            countryName: this.datos.countryName,
            userFullName: this.datos.userFullName
    
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          const messages = response.body.messages
          cy.log("messages", messages);
        });
      });
    });
  });