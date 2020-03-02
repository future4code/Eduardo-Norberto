import { ResidentialClient } from "./residentialClient";
import { CommercialClient } from "./commercialClient";
import { IndustrialClient } from "./industrialClient";
import { ClientManager } from "./clientManager";

const umbrella = new IndustrialClient(
    "Umbrella, Inc.",
     1, 
     3000000, 
     "Umbrella Corporation", 
     "00.666.666/0001-01",
     "30.754-500")

const losPollos = new CommercialClient(
    "Madrigal Electromotive",
    2,
    10000,
    "Los Pollos Hermanos",
    "00.475.784/0001-01",
    "69.784-500")

const ww = new ResidentialClient(
    "Heisenberg",
    3,
    500,
    "Walter White",
    "111.444.888.77",
    "78.457-684"
)

const client = new ClientManager()

client.addClient(umbrella)
client.addClient(losPollos)
client.addClient(ww)
console.log(client.clients)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
client.calculateAllIncome()
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
client.getClientsQuantity()
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
client.printCellBills()
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
