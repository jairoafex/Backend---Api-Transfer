/// <reference types ="Cypress" />
const datos=require('../../fixtures/CrearClients.json')

describe("Probando endpoint para crear cliente", () => {
    it("probando",()=>{
    cy.request({
        //url: '/clients',
        url: `${Cypress.env("API_CLIENTS")}/clients`,
        method: "POST",
        headers: {  "x-api-key": `${Cypress.env("API_CLIENTS_VALUE")}`},
        body:{
            "address": {
                "apartment": datos.address.apartment,
                "city": {
                    "alpha2CountryCode": datos.address.city.alpha2CountryCode,
                    "alpha3CountryCode": datos.address.city.alpha3CountryCode,
                    "callingCode": datos.address.city.callingCode,
                    "code": datos.address.city.code,
                    "countryId": datos.address.city.countryId,
                    "id": datos.address.city.id,
                    "name": datos.address.city.name,
                },
                "commune": {
                    "callingCode": datos.address.commune.callingCode,
                    "cityCode": datos.address.commune.cityCode,
                    "cityId": datos.address.commune.cityId,
                    "code": datos.address.commune.code,
                    "id": datos.address.commune.id,
                    "name": datos.address.commune.name
                },
                "postalCode": datos.address.postalCode,
                "residence": {
                    "alpha2Code": datos.address.residence.alpha2Code,
                    "alpha3Code": datos.address.residence.alpha3Code,
                    "callingCode": datos.address.residence.callingCode,
                    "id": datos.address.residence.id,
                    "name": datos.address.residence.name
                },
                "streetName": datos.address.streetName,
                "streetNumber": datos.address.streetNumber
            },
            "biometrics": {
                "documentFront": datos.biometrics.documentFront,
                "editedFields": [
                    "firtsName"
                ],
                "fingerPrint": datos.biometrics.fingerPrint,
                "refuseDocument": datos.biometrics.refuseDocument,
                "refuseFingerPrint": datos.biometrics.refuseFingerPrint
            },
            "branch": {
                "branchCode": datos.branch.branchCode,
                "branchId": datos.branch.branchId,
                "branchName": datos.branch.branchName,
                "userAfexId": datos.branch.userAfexId,
                "userFullName": datos.branch.userFullName
            },
            "categorization": {
                "isGiroClub": datos.categorization.isGiroClub,
                "isPreferential": datos.categorization.isPreferential
            },
            "compliance": {
                "isPEP": datos.compliance.isPEP,
                "relationshipPEP": datos.compliance.relationshipPEP,
                "transactionPurpose": datos.compliance.transactionPurpose
            },
            "contact": {
                "email": datos.contact.email,
                "mobilePhone": {
                    "areaCode": datos.contact.mobilePhone.areaCode,
                    "countryCode": datos.contact.mobilePhone.countryCode,
                    "number": datos.contact.mobilePhone.number
                },
                "landline": {
                    "areaCode": datos.contact.landline.areaCode,
                    "countryCode": datos.contact.landline.countryCode,
                    "number": datos.contact.landline.number
                },
                "verifyEmail": datos.contact.verifyEmail,
                "verifyMobile": datos.contact.verifyMobile
            },
            "clientType": datos.clientType,
            "identification": {
                "firstName": datos.identification.firstName,
                "middleName": datos.identification.middleName,
                "surname": datos.identification.surname,
                "secondSurname": datos.identification.secondSurname,
                "gender": datos.identification.gender,
                "identification": {
                    "country": {
                        "alpha2Code": datos.identification.identification.country.alpha2Code,
                        "alpha3Code": datos.identification.identification.country.alpha3Code,
                        "callingCode": datos.identification.identification.country.callingCode,
                        "id": datos.identification.identification.country.id,
                        "name": datos.identification.identification.country.name
                    },
                    "number": datos.identification.identification.number,
                    "serie": datos.identification.identification.serie,
                    "type": datos.identification.identification.type
                },
                "birthday": datos.identification.birthday,
                "nationality": {
                    "alpha2Code": datos.identification.nationality.alpha2Code,
                    "alpha3Code": datos.identification.nationality.alpha3Code,
                    "callingCode": datos.identification.nationality.callingCode,
                    "id": datos.identification.nationality.id,
                    "name": datos.identification.nationality.name
                },
                "occupations": [
                    {
                        "id": 3
                    }
                ]
            }
            }
        }
    ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.identification.identifications[0].number).to.be.equal(datos.identification.identification.number)
        cy.log(response);
      });
    })
})