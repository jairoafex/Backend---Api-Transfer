/// <reference types ="Cypress" />
describe("Probando Endpoint para agregar documento al cliente", () => {
    it("Get document Content", () => {
        cy.fixture("Documents").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            //url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
            url: `${Cypress.env("API_CLIENTS")}/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/url`,
            method: "GET",
            headers: { 
              "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}`
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("data")
            const id=response.body.data.id
            cy.log(id)
          });
        });


  });
})