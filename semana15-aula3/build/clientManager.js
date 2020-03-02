"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClientsQuantity() {
        console.log(`A concessionára possui ${this.clients.length} clientes cadastrados`);
    }
    printCellBills() {
        this.clients.forEach(client => {
            console.log(`${client.clientNumber} - ${client.clientName} - ${client.calculateBill()}`);
        });
    }
    calculateAllIncome() {
        let incomeSource = 0;
        this.clients.forEach(client => {
            incomeSource += client.calculateBill();
        });
        console.log(`A concessionária obteve a renda bruta de ${incomeSource}`);
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=clientManager.js.map