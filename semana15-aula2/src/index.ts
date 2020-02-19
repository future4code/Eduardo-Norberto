import { Dish } from "./dish";
import { Dessert } from "./dessert";
import { SaltyDish } from "./saltydish";
import { Employee } from "./employee";
import { Cashier } from "./cashier";

export const dishes: Dish[] = [
    new Dessert("Bolo", 10, 10, [], 10, 10),
    new SaltyDish("sopa", 20, 20, [], 20)
];

const emplayee: Employee[] = [
    new Cashier("Jesualdo", 5000, 1),
]

console.log(emplayee)

const bill = [new Dessert("Cupcake", 30, 15, [], 45, 10)]


const fun = () => {
    console.log(dishes)
    
}