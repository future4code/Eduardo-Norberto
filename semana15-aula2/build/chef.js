"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const index_1 = require("./index");
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
class Chef extends employee_1.Employee {
    sayJob() {
        console.log("Eu sou o Chefe da cozinha");
    }
    removeDishFromMenu(dishName) {
        index_1.dishes.find(dish => dish.getName() === dishName);
    }
    addDishToMenu(name, price, cost, ingredients, timeToCook, slicesNumber) {
        if (slicesNumber === undefined) {
            const newDish = new dessert_1.Dessert(name, price, cost, ingredients, timeToCook, slicesNumber);
            index_1.dishes.push(newDish);
        }
        else {
            const newDish = new saltydish_1.SaltyDish(name, price, cost, ingredients, timeToCook);
            index_1.dishes.push(newDish);
        }
    }
}
exports.Chef = Chef;
//# sourceMappingURL=chef.js.map