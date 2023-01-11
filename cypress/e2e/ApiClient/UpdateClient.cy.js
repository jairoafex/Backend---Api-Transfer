/// <reference types ="Cypress" />
describe("Probando Endpoint para actualizr clientes", () => {
    it("Agregar nuevo documento", () => {
      cy.fixture("ActualizarCliente").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `/client/${this.datos.id}`,
          method: "PUT",
          headers: { "x-api-key": "9RubKS6Sir1pNh1Mv7Zhp8JDxIoOkn0VnSKjQs25" },
          body: {
            contact: {
                email: this.datos.email,
                mobilePhone: {
                    areaCode: this.datos.mobilePhone.areaCode,
                    countryCode: this.datos.mobilePhone.countryCode,
                    number: this.datos.mobile.Phonenumber
                },
                landline: {
                    areaCode: this.datos.landline.areaCode,
                    countryCode: this.datos.landline.countryCode,
                    number: this.datos.landline.number
                },
                verifyEmail: this.datos.verifyEmail,
                verifyMobile: this.datos.verifyMobile
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
  