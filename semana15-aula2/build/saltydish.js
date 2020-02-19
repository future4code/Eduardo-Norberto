"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(name, price, cost, ingredients, timeToCook) {
        super(name, price, cost, ingredients, timeToCook);
    }
    cook() {
        console.log("Starting Salty Dish");
    }
}
exports.SaltyDish = SaltyDish;
const feijoada = new SaltyDish("feijoada", 100, 20, ["feijão"], 100);
console.log(feijoada.getProfit());
//# sourceMappingURL=saltydish.js.map