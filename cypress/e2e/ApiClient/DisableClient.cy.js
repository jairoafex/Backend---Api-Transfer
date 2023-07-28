describe("Testing API Clients [DisableClient]", () => {
  it("DisableClient[Staging]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_STAGING")}/clients/${datos.idCliente_staging
        }/disable`,
        method: "POST",
        failOnStatusCode: false,
        headers: {
          Authorization: `${Cypress.env("AUTHORIZATION_CLIENTS")}`,
          "x-afex-branch-code": datos.branchCode,
          "x-afex-user-id": datos.afexUserId,
        },
        body: {
          enabled: "true",
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.messages).to.be.equal("client is already enabled");
      });
    });
  });
  it("DisableClient[Sandbox]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_SANDBOX")}/clients/${datos.idCliente_sandbox
        }/disable`,
        method: "POST",
        failOnStatusCode: false,
        headers: {
          Authorization: `${Cypress.env("AUTHORIZATION_CLIENTS")}`,
          "x-afex-branch-code": datos.branchCode,
          "x-afex-user-id": datos.afexUserId,
        },
        body: {
          enabled: "true",
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.messages).to.be.equal("client is already enabled");
      });
    });
  });
  it.skip("DisableClient[Produccion]", () => {
    cy.fixture("data_test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `${Cypress.env("API_CLIENTS_PRODUCCION")}/clients/${datos.idCliente_produccion_enabled}/disable`,
        method: "POST",
        failOnStatusCode: false,
        headers: {
          Authorization: `${Cypress.env("AUTHORIZATION_CLIENTS_PRODUCCION")}`,
          "x-afex-branch-code": datos.branchCode,
          "x-afex-user-id": datos.afexUserId,
        },
        body: {
          enabled: "true",
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.messages).to.be.equal("client is already enabled");
      });
    });
  });

});
