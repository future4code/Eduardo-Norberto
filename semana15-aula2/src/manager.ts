import { Cashier } from "./cashier";

export class Manager extends Cashier {
    public sayJob(): void {
        console.log("Eu sou o gerente")
    }
}