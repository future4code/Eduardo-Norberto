"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    sayJob() {
        console.log("Eu sou o caixa");
    }
    calculateBill(amountSpent) {
        let bill = 0;
        amountSpent.forEach(dish => {
            bill += dish.getPrice();
        });
        return bill;
    }
}
exports.Cashier = Cashier;
//# sourceMappingURL=cashier.js.map