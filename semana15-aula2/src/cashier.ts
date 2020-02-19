import { Employee } from "./employee"
import { Dish } from "./dish"

export class Cashier extends Employee {
    public sayJob(): void {
        console.log("Eu sou o caixa")
    }

    public calculateBill(amountSpent: Dish[]):number {
        let bill: number = 0
        amountSpent.forEach(dish => {
            bill += dish.getPrice()
        })
        return bill
    }


}