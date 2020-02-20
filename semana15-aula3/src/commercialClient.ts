import { Commerce } from "./commerce";
import { Client } from "./client";

export class CommercialClient extends Commerce implements Client {
    public clientName: string;
    public clientNumber: number;
    public consumedEnergy: number;

    constructor(
        clientName: string,
        clientNumber: number,
        consumedEnergy: number,
        name: string,
        cnpj: string,
        cep: string
    ) {
        super(name, cnpj, cep)
    }

    public calculateBill(): number {
        const bill = this.consumedEnergy * 0.53
        return bill
    }
}