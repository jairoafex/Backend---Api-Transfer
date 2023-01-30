import {faker }from "@faker-js/faker";

//const rut = faker.random.numeric(9) + "-" + faker.helpers.arrayElement(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "K"]);
const rut = faker.random.numeric(9)

module.exports = {
    address: {
        apartment: faker.random.numeric(3),
        city: {
            alpha2CountryCode: "CL",
            alpha3CountryCode: "CHL",
            callingCode: 2,
            code: "SCL",
            countryId: 43,
            id: 322,
            name: "SANTIAGO"
        },
        commune: {
            callingCode: 2,
            cityCode: "SCL",
            cityId: 322,
            code: "STG",
            id: 317,
            name: "SANTIAGO"
        },
        postalCode: faker.random.numeric(6),
        residence: {
            alpha2Code: "CL",
            alpha3Code: "CHL",
            callingCode: 56,
            id: 43,
            name: "CHILE"
        },
        streetName: "Calle 851",
        streetNumber: "963"
    },
    biometrics: {
        documentFront: "documento_frontal_enero11",
        documentBack: "documento_trasero_enero11",
        editedFields: [
            "firstName"
        ],
        fingerPrint: "huella_enero11",
        refuseDocument: false,
        refuseFingerPrint: false
    },
    branch: {
        branchCode: "AG",
        branchId: 23,
        branchName: "AFEX MATIAS COUSIÑO",
        userAfexId: "237902165",
        userFullName: "MILIXA SIRA"
    },
    "categorization": {
        isGiroClub: false,
        isPreferential: false
    },
    compliance: {
        isPEP: false,
        relationshipPEP: false,
        transactionPurpose: 3
    },
    contact: {
        email: faker.internet.email(),
        mobilePhone: {
            areaCode: 9,
            countryCode: 56,
            number: faker.random.numeric({min: 10000000, max: 99999999})
        },
        landline: {
            areaCode: 9,
            countryCode: 56,
            number: 897410
        },
        verifyEmail: true,
        verifyMobile: true
    },
    clientType: 0,
    identification: {
        firstName: faker.name.firstName(),
        middleName: faker.name.middleName(),
        surname: faker.name.lastName(),
        secondSurname: faker.name.lastName(),
        gender: 1,
        identification: {
            country: {
                alpha2Code: "CL",
                alpha3Code: "CHL",
                callingCode: 56,
                id: 43,
                name: "CHILE"
            },
           // number:faker.random.numeric(11),
            number:rut,
            serie: faker.random.numeric(7),
            type: "rut"
        },
        birthday: faker.date.birthdate(),
        nationality: {
            alpha2Code: "CO",
            alpha3Code: "COL",
            callingCode: 57,
            id: 46,
            name: "COLOMBIA"
        },
        occupations: [
            {
                id: 5
            }
        ]
    }
}
