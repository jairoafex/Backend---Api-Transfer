describe("Probando Endpoint para agregar documento al cliente", () => {
  it("Agregar nuevo documento", () => {
    cy.fixture("AddHistory").then(function (datos) {
      this.datos = datos;
      cy.log("Data", this.datos.id);
      cy.request({
        url: `/client/${this.datos.id}/history`,
        method: "POST",
        headers: { "x-api-key": "9RubKS6Sir1pNh1Mv7Zhp8JDxIoOkn0VnSKjQs25" },
        body: {
          branchCode: this.datos.branchCode,
          date: this.datos.date,
          branchName: this.datos.branchName,
          description: this.datos.description,
          type: this.datos.type,
          userAfexId: this.datos.userAfexId
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("messages");
        const messages = response.body.messages
        cy.log("message=", messages);
      });
    });
  });
});
