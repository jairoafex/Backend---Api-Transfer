/// <reference types ="Cypress" />
describe("Probando Endpoint para actualizr clientes", () => {
    it("Agregar nuevo documento", () => {
      cy.fixture("ActualizarCliente").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          //url: `/client/${this.datos.id}`,
          url: `${Cypress.env("API_CLIENTS")}/clients/${this.datos.id}`,
          method: "PUT",
          headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}` },
          body: {
            "id":datos.id,
            "biometrics": {
                "documentFront": datos.biometrics.documentFront,
                "documentBack": datos.biometrics.documentBack,
                "editedFields": [
                    datos.biometrics.editedFields[0]
                ],
                "fingerPrint": datos.biometrics.fingerPrint,
                "refuseDocument": datos.biometrics.refuseDocument,
                "refuseFingerPrint": datos.biometrics.refuseFingerPrint
            },
            "branch": {
              "branchCode": datos.branch.branchCode,
              "branchId": datos.branch.branchId,
              "branchName": datos.branch.branchName,
              "userAfexId": datos.branch.userAfexId,
              "userFullName": datos.branch.userFullName
            }
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("messages");
          const messages = response.body.messages
          cy.log("message=", messages);
        });
      });
    });
  });
  