/// <reference types ="Cypress" />
const userData=require('../../fixtures/Feelookup')
let id_giro={};
describe("Probando Endpoint para cotizar y validar cumplimiento", () => {
    it("Crear nueva cotizacion[Feelookup]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/`,
          method: "POST",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` },
          body: userData
          
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("id");
          id_giro=response.body.data.id
          cy.log("id", id_giro);
        });
      });
    });
    it("Validar cumplimiento en cotizacion [FeelookupCompliance]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", id_giro);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/compliance`,
          method: "POST",
          failOnStatusCode:false,
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` },
          body: {
            feelookupId: id_giro,
            quoteId: this.datos.idquote,
            corporateCode: this.datos.codigo_cliente
          },
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("messages");
          const messages = response.body.messages
          cy.log("messages", messages);
        });
      });
    });
    it("Crear tarea de cumplimiento para cotizacion",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER')}/v1/transfers/feelookup/compliance/create`,
          method: "POST",
          headers: { "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}` },
          body: {
            feelookupId: id_giro,
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