/// <reference types ="Cypress" />
const requestData=require('../../fixtures/Feelookup(movii)')
const requestTransfer=require('../../fixtures/CreateTransfer(movii)')
let id_giro, id_transfer, afexTransferCode,rippleId ;
describe("Testing API service Movii", () => {
    it("Test #1 : Feelookup",()=>{
    cy.request({
        url: `${Cypress.env("API_TRANSFER")}/feelookup`,
        method: "POST",
        headers: {  "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}`},
        body: requestData
    }
    ).then((response) => {
        expect(response.status).to.eq(200);
        id_giro=response.body.data.id;
        expect(response.body.data).to.have.property("id",id_giro);
        expect(response.body).to.have.property('status', 'success')
      });
    })
    it("Test #2 : CreateTransfer",()=>{
        cy.request({
            url: `${Cypress.env("API_TRANSFER")}/transfersv1`,
            method: "POST",
            headers: {  "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}`},
            body: requestTransfer
        }
        ).then((response) => {
            expect(response.status).to.eq(200);
            id_transfer=response.body.data.id;
            afexTransferCode=response.body.data.afexTransferCode
            rippleId=response.body.data.rippleId
            expect(response.body.data).to.have.property("id",id_transfer);
            expect(response.body.data).to.have.property("afexTransferCode",afexTransferCode);
            expect(response.body.data).to.have.property("rippleId",rippleId);
            expect(response.body).to.have.property('status', 'success')
          });
        })
    
    it("Test #2 : ConfirmTransfer",()=>{
            cy.request({
                url: `${Cypress.env("API_TRANSFER")}/transfers/confirm`,
                method: "POST",
                headers: {  "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}`},
                body: {
                    id: id_transfer,
                    commissionTbk: 0,
                    collectionForm: 0 
                }
            }
            ).then((response) => {
                expect(response.status).to.eq(200);
                afexTransferCode=response.body.data.afexTransferCode
                expect(response.body.data).to.have.property("afexTransferCode",afexTransferCode);
                expect(response.body).to.have.property('status', 'success')
              });
            })


})