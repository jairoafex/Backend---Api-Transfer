/// <reference types ="Cypress" />
describe("Probando Endpoint para agregar documento al cliente", () => {
    it("Get document Content", () => {
        cy.fixture("Documents").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `${Cypress.env("API_CLIENTS")}/client/${this.datos.idCliente}/documents/${this.datos.idDocument}`,
            //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}`,
            method: "GET",
            headers: { 
              "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}`
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.be.equal('image/jpeg')
          });
        });


  });
})