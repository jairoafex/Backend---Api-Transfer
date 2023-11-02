describe('Testing API Transfer [GetDepositProgress]',()=>{
    it("GetDepositProgress[sandbox]", () => {
          cy.request({
            url: `${Cypress.env("API_TRANSFER_SANDBOX")}/v1/transfers/transfersDepositProcess?groupCode=&intermediaryBankCode=`,
            method: "GET",
            headers: {
              "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}`, 
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.be.equal('success')
            expect(response.body.message).to.be.equal('List of transfers')
          });

      });
      it("GetDepositProgress[staging]", () => {
        cy.request({
          url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/transfersDepositProcess?groupCode=&intermediaryBankCode=`,
          method: "GET",
          headers: {
            "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`, 
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.status).to.be.equal('success')
          expect(response.body.message).to.be.equal('List of transfers')
        });
    });
    it("GetDepositProgress[Produccion]", () => {
      cy.request({
        url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/transfersDepositProcess?groupCode=&intermediaryBankCode=`,
        method: "GET",
        headers: {
          "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`, 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.be.equal('success')
        expect(response.body.message).to.be.equal('List of transfers')
      });
      it("GetDepositProgress[Certificacion]", () => {
        cy.request({
          url: `${Cypress.env("API_TRANSFER_STAGING")}/v1/transfers/transfersDepositProcess?groupCode=&intermediaryBankCode=`,
          method: "GET",
          headers: {
            "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`, 
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.status).to.be.equal('success')
          expect(response.body.message).to.be.equal('List of transfers')
        });
  });

})})