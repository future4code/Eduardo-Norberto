import { Employee } from "./employee";
import { Dish } from "./dish";
import { dishes } from "./index";
import { Dessert } from "./dessert";
import { SaltyDish } from "./saltydish";

export class Chef extends Employee {
    public sayJob(): void {
        console.log("Eu sou o Chefe da cozinha")
    }

    public removeDishFromMenu(dishName: string): void {
        dishes.find(dish => dish.getName() === dishName)
    }

    public addDishToMenu (name: string, price: number, cost: number, ingredients: string[], timeToCook: number, slicesNumber?: number & undefined): void {
        if(slicesNumber === undefined){
            const newDish: Dish = new Dessert(name, price, cost, ingredients, timeToCook, slicesNumber)
            dishes.push(newDish)
        }else {
            const newDish: Dish = new SaltyDish(name, price, cost, ingredients, timeToCook)
            dishes.push(newDish)
        }
    }
}