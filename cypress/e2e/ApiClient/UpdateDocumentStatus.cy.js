/// <reference types ="Cypress" />
describe("Probando Endpoint para agregar documento al cliente", () => {
  it("Get document Content", () => {
    cy.fixture("Documents").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `/client/${this.datos.idCliente}/documents/${this.datos.idDocument}/status`,
        method: "POST",
        headers: {
          "x-api-key": "9RubKS6Sir1pNh1Mv7Zhp8JDxIoOkn0VnSKjQs25",
        },
        body: {
          status: this.datos.status,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        const messages = response.body.messages;
        cy.log(messages);
      });
    });
  });
});
