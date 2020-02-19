"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashier_1 = require("./cashier");
class Manager extends cashier_1.Cashier {
    sayJob() {
        console.log("Eu sou o gerente");
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map