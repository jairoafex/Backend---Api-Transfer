/// <reference types ="Cypress" />
describe("Testing Endpoint de pago beneficairio", () => {
  it(
    "Validar segun tipo de cotizacion la relacion de campos adicionales",
    {},
    () => {
      cy.request({
        url: `${Cypress.env("API_TRANSFER")}/v1/transfers/receive`,
        method: "POST",
        headers: { 
            "x-api-key": `${Cypress.env("API_TRANSFERS_VALUE")}`,
            "afexUserId":237902165,
            "branchCode":"AG"

         },
        failOnStatusCode: false,
        body: {
          corporateCode: 1127208,
          transferCode: "OG80029901",
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property("status", "error");
        const messages = response.body.messages;
        expect(response.body).to.have.property("messages", messages);
      });
    }
  );
});
