describe('Testing API Transfer [GetTransfersDetails]',()=>{
    it("Get Transfer details [sandbox]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_TRANSFER_SANDBOX")}/v1/transfers/${this.datos.codigo_giro_sandbox}`,
            method: "GET",
            headers: {
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}`,
              "x-afex-branch-code":this.datos.branchCode,
              "x-afex-branch-id":this.datos.afexUserId
              
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.be.equal('success')

          });
        });
      });
      it("GetTransferdetails[Staging]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/${this.datos.codigo_giro_staging}`,
            method: "GET",
            headers: {
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`,
              "x-afex-branch-code":this.datos.branchCode,
              "x-afex-branch-id":this.datos.afexUserId
              
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.be.equal('success')
            
          });
        });
      });
      it.skip("Get Transfer details [Produccion]", () => {
        cy.fixture("data_test").then(function (datos) {
          this.datos = datos;
          cy.request({
            url: `${Cypress.env("API_TRANSFER_PRODUCCION")}/v1/transfers/${this.datos.codigo_giro_produccion}`,
            method: "GET",
            headers: {
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFERS_PRODUCCION")}`,
              "x-afex-branch-code":this.datos.branchCode,
              "x-afex-branch-id":this.datos.afexUserId
              
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.be.equal('success')
            
          });
        });
      });
})