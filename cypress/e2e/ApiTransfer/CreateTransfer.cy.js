/// <reference types ="Cypress" />

let id_giro={};
describe("Testing API Transfer [Feelookup, FeelookupCompliance, FeelookupCreate]", () => {
    it("Feelookup[Staging]",{
    }, () => {
        cy.request({
          url: `${Cypress.env('API_TRANSFER_STAGING')}/v1/transfers/feelookup/`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}` },
          body: {
            amount: "100",
            branchId: "23",
            branchCode: "AG",
            receiverCountry: "PE",
            receiverCity: "***",
            includeFee:false,
            originCurrency: "USD"
        }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("id");
          id_giro=response.body.data.id
          cy.log("id", id_giro);
        });
    });
    it("CreateTransfer[Staging]",{
    }, () => {
        cy.log("id", id_giro);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_STAGING')}/v1/transfers/create`,
          method: "POST",
          headers: { 
            "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_STAGING")}`,
            "x-afex-user-id": "237902165"  
        },
          body: 
          {
            userFullName: "Jhon Doe",
            id: id_giro,
            quoteId: 0,
            recipient: {
                address: "CALLE GENERICA",
                cityCode: "LIM",
                cityDdi: 9,
                countryAlpha2Code: "PE",
                countryDdi: 59,
                names: "RICKY",
                phone: "89562312",
                surnames: "MOUSE"
            },
            sender: {
               corporateCode: "1127951",
                identification: "219833210",
                identificationType: "RUT"
            }
        }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("transferCode");
          const transferCode=response.body.data.transferCode
          cy.log(transferCode)
        });
    });
    it("Feelookup[Sandbox]",{
    }, () => {
      cy.fixture("data_test").then(function (datos) {
        this.datos = datos;
        cy.log("Data", this.datos.id);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/feelookup/`,
          method: "POST",
          headers: { "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}` },
          body: 
          {
            amount: "100",
            branchId: "23",
            branchCode: "AG",
            receiverCountry: "PE",
            receiverCity: "***",
            includeFee:false,
            originCurrency: "USD"
        }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("id");
          id_giro=response.body.data.id
          cy.log("id", id_giro);
        });
      });
    })
    it.skip("CreateTransfer[sandbox]",{
    }, () => {
        cy.log("id", id_giro);
        cy.request({
          url: `${Cypress.env('API_TRANSFER_SANDBOX')}/v1/transfers/create`,
          method: "POST",
          headers: { 
            "Authorization": `${Cypress.env("AUTHORIZATION_TRANSFER_SANDBOX")}`,
            "x-afex-user-id": "237902165"  
        },
          body: 
          {
            userFullName: "Jhon Doe",
            id: id_giro,
            quoteId: 0,
            recipient: {
                address: "CALLE GENERICA",
                cityCode: "LIM",
                cityDdi: 9,
                countryAlpha2Code: "PE",
                countryDdi: 59,
                names: "RICKY",
                phone: "89562312",
                surnames: "MOUSE"
            },
            sender: {
               corporateCode: "1127951",
                identification: "219833210",
                identificationType: "RUT"
            }
        }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("transferCode");
          const transferCode=response.body.data.transferCode
          cy.log(transferCode)
        });
    });
})
