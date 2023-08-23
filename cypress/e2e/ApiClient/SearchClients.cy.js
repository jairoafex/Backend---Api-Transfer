describe("Testing API Clients [SearchClients]", () => {
    it("Search Clients [Staging]", () => {
          cy.request({
            url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/search`,

            method: "POST",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
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
        it("SearchClients[Sandbox]", () => {
          cy.request({
            url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/search`,
            method: "POST",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
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
        it("SearchClients[Produccion]", () => {
          cy.request({
            url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/search`,
            method: "POST",
            headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}` },
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
