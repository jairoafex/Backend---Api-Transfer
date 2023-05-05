describe("Probando Endpoint para buscar cliente", () => {
    it("Search Clients [Staging]", () => {
          cy.request({
            url: `${Cypress.env("API_CLIENTS")}/clients/search`,
            //url: '/clients/search',
            method: "POST",
            headers: { "Authorization": `${Cypress.env("Authorization")}` },
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
        it("Search Clients [Sandbox]", () => {
          cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/search`,
            //url: '/clients/search',
            method: "POST",
            headers: { "Authorization": `${Cypress.env("Authorization")}` },
            body:{
                    search: "Gina"
                }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data[0]).to.have.property("id")
            const id=response.body.data[0].id
            cy.log(id);
          });
        });
        it("Search Clients [Produccion]", () => {
          cy.request({
            url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/search`,
            //url: '/clients/search',
            method: "POST",
            headers: { "Authorization": `${Cypress.env("Authorization")}` },
            body:{
                    search: `${Math.floor(Math.random() * 1000)}`
                }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data[0]).to.have.property("id")
            const id=response.body.data[0].id
            cy.log(id);
          });
        });
  });
