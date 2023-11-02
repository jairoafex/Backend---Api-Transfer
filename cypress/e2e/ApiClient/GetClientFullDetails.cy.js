/// <reference types ="Cypress" />
describe("Testing API Clients [GetClientFullDetails]", () => {
    it("GetClientFullDetails[Staging]", () => {
      cy.fixture("data_test").then(function(datos){
        this.datos=datos
        cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/full/${datos.idCliente_staging_full}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
        expect(response.body).to.have.property("status", "success");
        /*expect(response.body.data.groups[0].fields[6].value).to.be.equal(43) //Reference to country document ID
        expect(response.body.data.groups[1].fields[0].value).to.be.equal(43) //Reference to nationality country ID
        expect(response.body.data.groups[1].fields[4].value).to.be.equal(43) //Reference to country residence ID
        expect(response.body.data.groups[1].fields[5].value).to.be.equal(322) //Reference to city residence ID
        expect(response.body.data.groups[1].fields[6].value).to.be.equal(29) //Referente to commune residence ID
        */
      });
      })
    });
    it("GetClientFullDetails[Sandbox]", () => {
      cy.fixture("data_test").then(function(datos){
        this.datos=datos
        cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/full/${datos.idCliente_sandbox_full}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
        expect(response.body).to.have.property("status", "success");

      });
      })
    });
    it("GetClientFullDetails[Produccion]", () => {
      cy.fixture("data_test").then(function(datos){
        this.datos=datos
        cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/full/${datos.idCliente_produccion}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
        expect(response.body).to.have.property("status", "success");
      });
      })
    });
    it("GetClientFullDetails[Certificacion]", () => {
      cy.fixture("data_test").then(function(datos){
        this.datos=datos
        cy.request({
        url: `${Cypress.env("API_CLIENTS_CERTIFICACION")}/clients/full/${datos.idCliente_produccion}`,
        method: "GET",
        headers: { "Authorization": `${Cypress.env("AUTHORIZATION_CLIENTS_CERTIFICACION")}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.messages[0]).to.be.equal('fields for client-person-normal')
        expect(response.body).to.have.property("status", "success");
      });
      })
    });
  });
  