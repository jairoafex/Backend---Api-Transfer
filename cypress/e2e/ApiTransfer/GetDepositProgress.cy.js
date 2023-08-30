describe('Testing API Transfer [GetDepositPending]',()=>{
    it("Get Deposit Progress [sandbox]", () => {
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
      it.skip("Get Deposit Progress [staging]", () => {
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

})