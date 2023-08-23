import {faker }from "@faker-js/faker";
const rut = faker.random.numeric(9)
module.exports = {
  type: "person",
  risk: "normal",
  fields: [
    {
      name: "identification-identification-type",
      id: "client-person-normal-identification-identification-type",
      dataSourceType: "options",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "Tipo de identificación",
      required: "ALWAYS",
      type: "SELECT",
      options: [
        {
          label: "RUT",
          value: 1,
        },
        {
          label: "PASAPORTE",
          value: 2,
        },
        {
          label: "DNI",
          value: 3,
        },
      ],
      context: "client-person-normal",
      order: 1,
      groupName: "data",
      property: "identification.identifications[0].type",
      isEditable: false,
      value: 1,
    },
    {
      name: "identification-identification-country",
      id: "client-person-normal-identification-identification-country",
      dataSourceType: "sources",
      dataSource: "countryList",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "País Documento ID",
      required: "ALWAYS",
      type: "SELECT",
      context: "client-person-normal",
      order: 2,
      groupName: "data",
      property: "identification.identifications[0].country",
      isEditable: false,
      value: 43,
    },
    {
      name: "identification-identification-serie",
      id: "client-person-normal-identification-identification-serie",
      label: "Número de serie",
      required: "CONDITIONED",
      requiredConditions: [
        {
          name: "identification-identification-type",
          id: "client-person-normal-identification-identification-type",
          type: "FIXED",
          values: [1],
        },
      ],
      validation: {
        type: "REGEXP",
        value: "^[0-9]{1,10}$",
        message:
          "El número de serie debe ser numérico y tener entre 1 y 10 dígitos",
      },
      type: "STRING",
      context: "client-person-normal",
      order: 2,
      groupName: "data",
      property: "identification.identifications[0].serie",
      isEditable: false,
      value: "7867867",
    },
    {
      name: "identification-identification-number",
      id: "client-person-normal-identification-identification-number",
      label: "Número de documento",
      required: "ALWAYS",
      type: "STRING",
      context: "client-person-normal",
      order: 3,
      groupName: "data",
      property: "identification.identifications[0].number",
      isEditable: false,
      value: rut
    },
    {
      name: "identification-gender",
      id: "client-person-normal-identification-gender",
      label: "Género",
      dataSourceType: "options",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      required: "ALWAYS",
      type: "SELECT",
      options: [
        {
          label: "MASCULINO",
          value: 1,
        },
        {
          label: "FEMENINO",
          value: 2,
        },
        {
          label: "X",
          value: 3,
        },
      ],
      context: "client-person-normal",
      order: 1,
      groupName: "personal-data",
      property: "identification.gender",
      isEditable: true,
      value: 1,
    },
    {
      name: "identification-firstName",
      id: "client-person-normal-identification-firstName",
      label: "Primer nombre",
      required: "ALWAYS",
      type: "STRING",
      context: "client-person-normal",
      order: 2,
      groupName: "personal-data",
      property: "identification.firstName",
      isEditable: true,
      value: faker.name.firstName(),
    },
    {
      name: "identification-middleName",
      id: "client-person-normal-identification-middleName",
      label: "Segundo nombre",
      required: "ALWAYS",
      type: "STRING",
      context: "client-person-normal",
      order: 3,
      groupName: "personal-data",
      property: "identification.middleName",
      isEditable: true,
      value: "JOSE",
    },
    {
      name: "identification-surname",
      id: "client-person-normal-identification-surname",
      label: "Apellido paterno",
      required: "ALWAYS",
      type: "STRING",
      context: "client-person-normal",
      order: 4,
      groupName: "personal-data",
      property: "identification.surname",
      isEditable: true,
      value: faker.name.lastName(),
    },
    {
      name: "identification-secondSurname",
      id: "client-person-normal-identification-secondSurname",
      label: "Apellido materno",
      required: "ALWAYS",
      type: "STRING",
      context: "client-person-normal",
      order: 5,
      groupName: "personal-data",
      property: "identification.secondSurname",
      isEditable: true,
      value: "URDANETA",
    },
    {
      name: "identification-birthdate",
      id: "client-person-normal-identification-birthdate",
      label: "Fecha de nacimiento",
      required: "ALWAYS",
      validation: {
        type: "REGEXP",
        value: "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
        message: "La fecha de nacimiento debe tener el formato yyyy-mm-dd",
      },
      type: "STRING",
      context: "client-person-normal",
      order: 6,
      groupName: "personal-data",
      property: "identification.birthday",
      isEditable: true,
      value: "1980-01-01",
    },
    {
      name: "address-nationality",
      id: "client-person-normal-address-nationality",
      dataSourceType: "sources",
      dataSource: "countryList",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "País nacionalidad",
      required: "ALWAYS",
      type: "SELECT",
      context: "client-person-normal",
      order: 1,
      groupName: "location",
      property: "identification.nationality.id",
      isEditable: true,
      value: 43,
    },
    {
      name: "address-streetName",
      id: "client-person-normal-address-streetName",
      label: "Dirección",
      required: "ALWAYS",
      type: "STRING",
      context: "client-person-normal",
      order: 2,
      groupName: "location",
      property: "address.streetName",
      isEditable: true,
      value: "elm street",
    },
    {
      name: "address-streetNumber",
      id: "client-person-normal-address-streetNumber",
      label: "Número",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 3,
      groupName: "location",
      property: "address.streetNumber",
      isEditable: true,
      value: "1550",
    },
    {
      name: "address-apartment",
      id: "client-person-normal-address-apartment",
      label: "Dpto/Oficina",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 4,
      groupName: "location",
      property: "address.apartment",
      isEditable: true,
      value: "4B",
    },
    {
      name: "address-city",
      id: "client-person-normal-address-city",
      dataSourceType: "sources",
      dataSource: "cityList",
      dataSourceStructure: {
        label: "label",
        value: "value",
        dependingValue: "dependingValue",
      },
      label: "Ciudad residencia",
      required: "ALWAYS",
      options: "<<CITIES-LIST>>",
      dependsOn: "address-country",
      type: "SELECT",
      context: "client-person-normal",
      order: 5,
      groupName: "location",
      property: "address.city.id",
      isEditable: true,
      value: 322,
    },
    {
      name: "address-commune",
      id: "client-person-normal-address-commune",
      dataSourceType: "sources",
      dataSource: "communeList",
      dataSourceStructure: {
        label: "label",
        value: "value",
        dependingValue: "dependingValue",
      },
      label: "Comuna residencia",
      required: "ALWAYS",
      options: "<<COMMUNES-LIST>>",
      dependsOn: "address-city",
      type: "SELECT",
      context: "client-person-normal",
      order: 6,
      groupName: "location",
      property: "address.commune.id",
      isEditable: true,
      value: 29,
    },
    {
      name: "address-country",
      id: "client-person-normal-address-country",
      dataSourceType: "sources",
      dataSource: "countryList",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "País residencia",
      required: "ALWAYS",
      options: "<<COUNTRIES-LIST>>",
      type: "SELECT",
      context: "client-person-normal",
      order: 7,
      groupName: "location",
      property: "address.residence.id",
      isEditable: true,
      value: 43,
    },
    {
      name: "identification-primaryOccupation",
      id: "client-person-normal-identification-primaryOccupation",
      dataSourceType: "sources",
      dataSource: "occupationList",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "Ocupación principal",
      required: "ALWAYS",
      options: "<<OCCUPATIONS-LIST>>",
      type: "SELECT",
      context: "client-person-normal",
      order: 1,
      groupName: "occupation",
      property: "identification.occupations[0].id",
      isEditable: true,
      value: 11,
    },
    {
      name: "identification-secondaryOccupation",
      id: "client-person-normal-identification-secondaryOccupation",
      dataSourceType: "sources",
      dataSource: "occupationList",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "Ocupación secundaria",
      required: "ALWAYS",
      options: "<<OCCUPATIONS-LIST>>",
      type: "SELECT",
      context: "client-person-normal",
      order: 2,
      groupName: "occupation",
      property: "identification.occupations[1].id",
      isEditable: true,
      value: 9,
    },
    {
      name: "identification-profession",
      id: "client-person-normal-identification-profession",
      label: "Profesión",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 3,
      groupName: "occupation",
      property: "identification.profession",
      isEditable: true,
      value: "GAMBLER",
    },
    {
      name: "identification-employerName",
      id: "client-person-normal-identification-employerName",
      label: "Nombre empleador",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 4,
      groupName: "occupation",
      property: "identification.employerName",
      isEditable: true,
      value: "AMAZON",
    },
    {
      name: "contact-email",
      id: "client-person-normal-contact-email",
      label: "Correo electrónico",
      required: "NO",
      validation: {
        type: "REGEXP",
        value: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
        message: "El correo electrónico no es válido",
      },
      type: "STRING",
      context: "client-person-normal",
      order: 1,
      groupName: "contact",
      property: "contact.email",
      isEditable: true,
      value: "xxx@yyy.com",
    },
    {
      name: "contact-mobilePhone-areaCode",
      id: "client-person-normal-contact-mobilePhone-areaCode",
      label: "Teléfono celular (código de área)",
      required: "ALWAYS",
      type: "NUMBER",
      context: "client-person-normal",
      order: 2,
      groupName: "contact",
      property: "contact.mobilePhone.areaCode",
      isEditable: true,
      value: "9",
    },
    {
      name: "contact-mobilePhone-countryCode",
      id: "client-person-normal-contact-mobilePhone-countryCode",
      label: "Teléfono celular (código de país)",
      required: "ALWAYS",
      type: "NUMBER",
      context: "client-person-normal",
      order: 3,
      groupName: "contact",
      property: "contact.mobilePhone.countryCode",
      isEditable: true,
      value: "56",
    },
    {
      name: "contact-mobilePhone-number",
      id: "client-person-normal-contact-mobilePhone-number",
      label: "Teléfono celular (número)",
      required: "ALWAYS",
      type: "NUMBER",
      context: "client-person-normal",
      order: 4,
      groupName: "contact",
      property: "contact.mobilePhone.number",
      isEditable: true,
      value: "25633698",
    },
    {
      name: "contact-landLine-areaCode",
      id: "client-person-normal-contact-landline-areaCode",
      label: "Teléfono fijo (código de área)",
      required: "ALWAYS",
      type: "NUMBER",
      context: "client-person-normal",
      order: 5,
      groupName: "contact",
      property: "contact.landLine.areaCode",
      isEditable: true,
      value: "2",
    },
    {
      name: "contact-landLine-countryCode",
      id: "client-person-normal-contact-landline-countryCode",
      label: "Teléfono fijo (código de país)",
      required: "ALWAYS",
      type: "NUMBER",
      context: "client-person-normal",
      order: 6,
      groupName: "contact",
      property: "contact.landLine.countryCode",
      isEditable: true,
      value: "56",
    },
    {
      name: "contact-landLine-number",
      id: "client-person-normal-contact-landline-number",
      label: "Teléfono fijo (número)",
      required: "ALWAYS",
      type: "NUMBER",
      context: "client-person-normal",
      order: 7,
      groupName: "contact",
      property: "contact.landLine.number",
      isEditable: true,
      value: "6854756",
    },
    {
      name: "bank-bank",
      id: "client-person-normal-bank-bank",
      dataSourceType: "sources",
      dataSource: "bankList",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "Banco",
      required: "ALWAYS",
      options: "<<BANKS-LIST>>",
      type: "SELECT",
      context: "client-person-normal",
      order: 1,
      groupName: "account-location",
      property: "bank.house",
      isEditable: true,
      value: "1140",
    },
    {
      name: "bank-checkingAccount",
      id: "client-person-normal-bank-checkingAccount",
      label: "Cuenta corriente",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 2,
      groupName: "account-location",
      property: "bank.checkingAccount",
      isEditable: true,
      value: "600005884668468",
    },
    {
      name: "bank-savingsAccount",
      id: "client-person-normal-bank-savingsAccount",
      label: "Cuenta de ahorro",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 3,
      groupName: "account-location",
      property: "bank.savingsAccount",
      isEditable: true,
      value: "900880454555544",
    },
    {
      name: "system-username",
      id: "client-person-normal-system-username",
      label: "Nombre de usuario",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 1,
      property: "system.username",
      isEditable: true,
      value: "mmiras",
    },
    {
      name: "system-password",
      id: "client-person-normal-system-password",
      label: "Password",
      required: "CONDITIONED",
      requiredConditions: [
        {
          id: "client-person-normal-system-username",
          name: "system-username",
          type: "REGEXP",
          values: "^(?!\\s*$).+",
        },
      ],
      type: "STRING",
      context: "client-person-normal",
      order: 2,
      property: "system.password",
      isEditable: true,
      value: "123456",
    },
    {
      name: "system-question",
      id: "client-person-normal-system-question",
      label: "Pregunta",
      required: "CONDITIONED",
      requiredConditions: [
        {
          id: "client-person-normal-system-username",
          name: "system-username",
          type: "REGEXP",
          values: "^(?!\\s*$).+",
        },
      ],
      type: "STRING",
      context: "client-person-normal",
      order: 3,
      property: "system.question",
      isEditable: true,
      value: "que",
    },
    {
      name: "system-answer",
      id: "client-person-normal-system-answer",
      label: "Respuesta",
      required: "CONDITIONED",
      requiredConditions: [
        {
          id: "client-person-normal-system-username",
          name: "system-username",
          type: "REGEXP",
          values: "^(?!\\s*$).+",
        },
      ],
      type: "STRING",
      context: "client-person-normal",
      order: 4,
      property: "system.answer",
      isEditable: true,
      value: "yes",
    },
    {
      name: "afex-branch",
      id: "client-person-normal-afex-branch",
      dataSourceType: "sources",
      dataSource: "branchList",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "Sucursal",
      required: "NO",
      options: "<<BRANCHES-LIST>>",
      type: "SELECT",
      context: "client-person-normal",
      order: 5,
      property: "afex.branch",
      isEditable: true,
      value: "23",
    },
    {
      name: "afex-userAfexCode",
      id: "client-person-normal-afex-userAfexCode",
      label: "Código del ejecutivo",
      required: "NO",
      type: "NUMBER",
      context: "client-person-normal",
      order: 6,
      property: "afex.userAfexCode",
      isEditable: true,
      value: 237902165,
    },
    {
      name: "compliance-isPEP",
      id: "client-person-normal-compliance-isPEP",
      dataSourceType: "options",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      label: "PEP",
      required: "ALWAYS",
      options: [
        {
          label: "PEP",
          value: true,
        },
        {
          label: "NO PEP",
          value: false,
        },
      ],
      type: "SELECT",
      context: "client-person-normal",
      order: 7,
      property: "compliance.isPEP",
      isEditable: true,
      value: "false",
    },
    {
      name: "compliance-transactionPurpose",
      id: "client-person-normal-compliance-transactionPurpose",
      label: "Propósito de la transacción",
      dataSourceType: "options",
      dataSourceStructure: {
        label: "label",
        value: "value",
      },
      required: "ALWAYS",
      options: [
        {
          label: "GIRO",
          value: 1,
        },
        {
          label: "CAMBIO",
          value: 2,
        },
        {
          label: "AMBOS",
          value: 3,
        },
      ],
      type: "SELECT",
      context: "client-person-normal",
      order: 8,
      property: "compliance.transactionPurpose",
      isEditable: true,
      value: 1,
    },
    {
      name: "compliance-transactionPurposeDescription",
      id: "client-person-normal-compliance-transactionPurposeDescription",
      label: "Propósito de las transacciones",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 9,
      property: "compliance.transactionPurposeDescription",
      isEditable: true,
      value: "GASTOS FAMILIARES",
    },
    {
      name: "compliance-economicActivity",
      id: "client-person-normal-compliance-economicActivity",
      dataSourceType: "sources",
      dataSource: "economicActivityList",
      label: "Actividad económica",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 10,
      property: "compliance.economicActivity",
      isEditable: true,
      value: "11111",
    },
    {
      name: "compliance-commercialReference",
      id: "client-person-normal-compliance-commercialReference",
      label: "Referencia comercial / Bancaria",
      required: "NO",
      type: "STRING",
      context: "client-person-normal",
      order: 11,
      property: "compliance.commercialReference",
      isEditable: true,
      value: "XXX",
    },
    {
      name: "compliance-clientMonthlyTransferQty",
      id: "client-person-normal-compliance-clientMonthlyTransferQty",
      label: "Información cliente (cantidad transacciones / mes)",
      required: "NO",
      type: "NUMBER",
      context: "client-person-normal",
      order: 12,
      property: "compliance.clientMonthlyTransferQty",
      isEditable: true,
      value: 10,
    },
    {
      name: "compliance-clientMonthlyTransferAmn",
      id: "client-person-normal-compliance-clientMonthlyTransferAmn",
      label: "Información cliente (monto transacciones / mes)",
      required: "NO",
      type: "NUMBER",
      context: "client-person-normal",
      order: 13,
      property: "compliance.clientMonthlyTransferAmn",
      isEditable: true,
      value: 5000,
    },
    {
      name: "compliance-afexMonthlyTransferQty",
      id: "client-person-normal-compliance-afexMonthlyTransferQty",
      label: "Información AFEX (cantidad transacciones / mes)",
      required: "NO",
      type: "NUMBER",
      context: "client-person-normal",
      order: 14,
      property: "compliance.afexMonthlyTransferQty",
      isEditable: true,
      value: 20,
    },
    {
      name: "compliance-afexMonthlyTransferAmn",
      id: "client-person-normal-compliance-afexMonthlyTransferAmn",
      label: "Información AFEX (monto transacciones / mes)",
      required: "NO",
      type: "NUMBER",
      context: "client-person-normal",
      order: 15,
      property: "compliance.afexMonthlyTransferAmn",
      isEditable: true,
      value: 70000,
    },
    {
      name: "compliance-annualIncomeAmn",
      id: "client-person-normal-compliance-annualIncomeAmn",
      label: "Ingreso anual",
      required: "NO",
      type: "NUMBER",
      context: "client-person-normal",
      order: 16,
      property: "compliance.annualIncomeAmn",
      isEditable: true,
      value: 500000,
    },
    {
      name: "compliance-patrimonyAmn",
      id: "client-person-normal-compliance-patrimonyAmn",
      label: "Monto patrimonio USD",
      required: "NO",
      type: "NUMBER",
      context: "client-person-normal",
      order: 17,
      property: "compliance.patrimonyAmn",
      isEditable: true,
      value: 200000,
    },
    {
      name: "compliance-patrimonySource",
      id: "client-person-normal-compliance-patrimonySource",
      label: "Origen patrimonio y/o fondos",
      required: "NO",
      type: "STRING",
      property: "compliance.patrimonySource",
      isEditable: true,
      value: "DRUGS",
    },
  ],
};