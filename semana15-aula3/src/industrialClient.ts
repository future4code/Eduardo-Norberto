import { Industry } from "./industry";
import { Client } from "./client";

export class IndustrialClient extends Industry implements Client {
    public clientName: string;
    public clientNumber: number;
    public consumedEnergy: number;

    constructor(
        clientName: string,
        clientNumber: number,
        consumedEnergy: number,
        name: string,
        cnpj: string,
        cep: string,
    ){
        super(name, cnpj, cep)
    }

    public calculateBill(): number {
        const bill = this.consumedEnergy * 0.45 + 10000
        return bill
    }
}