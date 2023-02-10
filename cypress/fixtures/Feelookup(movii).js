import { faker } from "@faker-js/faker";

module.exports = {
  branchId: "84",
  amount: faker.random.numeric(5),
  agent: "MW",
  receiverCountry: "CO",
  receiverCity: "BOG",
  originCurrency: "CLP",
  destinationCurrency: "COP",
  methodPayment: "1",
  receiverAgent: "1",
  promoCode: "",
  isPreTransfer: "0",
  collectionForm: "0",
  typeCollectionCard: "0",
};
