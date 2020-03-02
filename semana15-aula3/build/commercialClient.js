"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commerce_1 = require("./commerce");
class CommercialClient extends commerce_1.Commerce {
    constructor(clientName, clientNumber, consumedEnergy, name, cnpj, cep) {
        super(name, cnpj, cep);
    }
    calculateBill() {
        const bill = this.consumedEnergy * 0.53;
        return bill;
    }
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=commercialClient.js.map