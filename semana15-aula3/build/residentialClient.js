"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residence_1 = require("./residence");
class ResidentialClient extends residence_1.Residence {
    constructor(clientName, clientNumber, consumedEnergy, name, cpf, cep) {
        super(name, cpf, cep);
    }
    calculateBill() {
        const bill = this.consumedEnergy * 0.75;
        return bill;
    }
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=residentialClient.js.map