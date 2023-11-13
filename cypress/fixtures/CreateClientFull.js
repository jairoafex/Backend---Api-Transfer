import {faker }from "@faker-js/faker";
var rut = faker.random.numeric(9)
module.exports = {
  
    type: "person",
    risk: "normal",
    fields: [
        {
            id: "client-person-normal-identification-identification-type",
            value: 1
        },
        {
            id: "client-person-normal-identification-identification-number",
            value: rut
        },
        {
            id: "client-person-normal-identification-identification-serie",
            value: faker.random.numeric(6)
        },
        {
            id: "client-person-normal-identification-identification-country",
            value: "43"
        },
        {
            id: "client-person-normal-address-nationality",
            value: "43"
        },
        {
            id: "client-person-normal-identification-identification-expirationDate",
            value: "2023-12-12"
        },
        {
            id: "client-person-normal-identification-firstName",
            value: faker.name.firstName()
        },
                {
            id: "client-person-normal-identification-middleName",
            value: faker.name.middleName()
        },
        {
            id: "client-person-normal-identification-surname",
            value: faker.name.lastName()
        },
        {
            id: "client-person-normal-identification-secondSurname",
            value: faker.name.lastName()
        },
        {
            id: "client-person-normal-identification-birthdate",
            value: "1980-01-01"
        },
        {
            id: "client-person-normal-identification-gender",
            value: 1
        },
        //location
        {
            id: "client-person-normal-address-country",
            value: "43"
        },
        {
            id: "client-person-normal-address-city",
            value: "322"
        },
        {
            id: "client-person-normal-address-commune",
            value: "317"
        },
        {
            id: "client-person-normal-address-postalCode",
            value: "680041"
        },
        {
            id: "client-person-normal-address-streetName",
            value: "STREET MONCTON"
        },     
        {
            id: "client-person-normal-address-streetNumber",
            value: "333"
        },
        {
            id: "client-person-normal-address-apartment",
            value: "202"
        },
        //contact
        {
            id: "client-person-normal-contact-mobilePhone-countryCode",
            value: "56"
        },
        {
            id: "client-person-normal-contact-mobilePhone-areaCode",
            value: "9"
        },
        {
            id: "client-person-normal-contact-mobilePhone-number",
            value: "51229357"
        },
        {
            id: "client-person-normal-contact-landline-countryCode",
            value: "56"
        },
        {
            id: "client-person-normal-contact-landline-areaCode",
            value: "2"
        },

        {
            id: "client-person-normal-contact-landline-number",
            value: "5466473"
        },
        {
            id: "client-person-normal-contact-email",
            "value": "test@jairo.com"
        },
        //profile
        {
            id: "client-person-normal-compliance-caution",
            value: false
        },
        {
            id: "client-person-normal-compliance-isPEP",
            value: false
        },
        {
            id: "client-person-normal-compliance-clientProfile",
            value: 16
        },
        // branch contact
        {
            id: "client-person-normal-afex-branch",
            value: "23"
        },
        {
            id: "client-person-normal-afex-userAfexCode",
            value: "34"
        },
        {
            id: "client-person-normal-compliance-transactionPurpose",
            value: 1
        },
        {
            id: "client-person-normal-compliance-transactionPurposeDescription",
            value: "TEST"
        }

    ]
}



