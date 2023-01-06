describe("Probando Endpoint para agregar documento al cliente", () => {
    it("Agregar nuevo documento", () => {
        cy.fixture("AddDocuments").then(function (datos) {
          this.datos = datos;
          cy.log("Data", this.datos.id);
          cy.request({
            url: `/client/${this.datos.id}/documents`,
            method: "POST",
            headers: { "x-api-key": "9RubKS6Sir1pNh1Mv7Zhp8JDxIoOkn0VnSKjQs25" },
            body:{
                branchCode: this.datos.branchCode,
                branchId: this.datos.branchId,
                branchName: this.datos.branchName,
                data: {
                    base64: this.datos.data.base64,
                    contentType: this.datos.data.contentType,
                    name: this.datos.data.name,
                    type: this.datos.data.type
                },
                userAfexId: this.datos.userAfexId,
                userFullName: this.datos.userFullName
                }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property("id")
            const id=response.body.data.id
            cy.log(id)
          });
        });


  });
})