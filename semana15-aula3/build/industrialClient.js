"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const industry_1 = require("./industry");
class IndustrialClient extends industry_1.Industry {
    constructor(clientName, clientNumber, consumedEnergy, name, cnpj, cep) {
        super(name, cnpj, cep);
    }
    calculateBill() {
        const bill = this.consumedEnergy * 0.45 + 10000;
        return bill;
    }
}
exports.IndustrialClient = IndustrialClient;
//# sourceMappingURL=industrialClient.js.map