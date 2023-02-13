import {faker }from "@faker-js/faker";
module.exports = {

    contact: {
        email: faker.internet.email(),
        mobilePhone: {
            areaCode: 67,
            countryCode: 56,
            number: faker.random.numeric(9)
        },
        landline: faker.random.numeric(9),
        verifyEmail: true,
        verifyMobile: true
    },
    branch: {
        branchId: 23,
        branchCode: "AG",
        branchName: "AFEX MATIAS COUSIÑO",
        userAfexId: "2",
        userFullName: "Guido Solar"
    }
}