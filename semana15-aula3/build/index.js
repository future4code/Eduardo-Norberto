"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residentialClient_1 = require("./residentialClient");
const commercialClient_1 = require("./commercialClient");
const industrialClient_1 = require("./industrialClient");
const clientManager_1 = require("./clientManager");
const umbrella = new industrialClient_1.IndustrialClient("Umbrella, Inc.", 1, 3000000, "Umbrella Corporation", "00.666.666/0001-01", "30.754-500");
const losPollos = new commercialClient_1.CommercialClient("Madrigal Electromotive", 2, 10000, "Los Pollos Hermanos", "00.475.784/0001-01", "69.784-500");
const ww = new residentialClient_1.ResidentialClient("Heisenberg", 3, 500, "Walter White", "111.444.888.77", "78.457-684");
const client = new clientManager_1.ClientManager();
client.addClient(umbrella);
client.addClient(losPollos);
client.addClient(ww);
console.log(client.clients);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
client.calculateAllIncome();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
client.getClientsQuantity();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
client.printCellBills();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
//# sourceMappingURL=index.js.map