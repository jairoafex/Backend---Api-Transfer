describe("Probando Endpoint para buscar cliente", () => {
    it("Get Client By Documento", () => {
          cy.request({
            url: `${Cypress.env("API_CLIENTS")}/clients/search`,
            //url: '/clients/search',
            method: "POST",
            headers: { "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}` },
            body:{
                    search: `${Math.floor(Math.random() * 100)}`
                }
            
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data[0]).to.have.property("id")
            const id=response.body.data[0].id
            cy.log(id);
          });
        });


  });
