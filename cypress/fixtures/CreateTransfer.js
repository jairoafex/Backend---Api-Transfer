const { id_giro } = require('../e2e/ApiTransfer/CreateTransfer.cy.js');

function getIdGiro() {
    return id_giro;
}
module.exports={
    userFullName: "Jhon Doe",
    "id": getIdGiro,
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
