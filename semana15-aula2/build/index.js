"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
const cashier_1 = require("./cashier");
exports.dishes = [
    new dessert_1.Dessert("Bolo", 10, 10, [], 10, 10),
    new saltydish_1.SaltyDish("sopa", 20, 20, [], 20)
];
const emplayee = [
    new cashier_1.Cashier("Jesualdo", 5000, 1),
];
console.log(emplayee);
const bill = [new dessert_1.Dessert("Cupcake", 30, 15, [], 45, 10)];
const fun = () => {
    console.log(exports.dishes);
};
//# sourceMappingURL=index.js.map