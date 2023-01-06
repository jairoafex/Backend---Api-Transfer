/// <reference types ="Cypress" />
describe("Probando Endpoint para actualizr clientes", () => {
    it("Agregar nuevo documento", () => {
      cy.fixture("DatosActualizados").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `/client/${this.datos.id}`,
          method: "PUT",
          headers: { "x-api-key": "9RubKS6Sir1pNh1Mv7Zhp8JDxIoOkn0VnSKjQs25" },
          body: {
            "contact": {
                "email": "prueba",
                "mobilePhone": {
                    "areaCode": 9,
                    "countryCode": 56,
                    "number": 9874117
                },
                "landline": {
                    "areaCode": 9,
                    "countryCode": 56,
                    "number": 897410
                },
                "verifyEmail": true,
                "verifyMobile": true
            },
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
  