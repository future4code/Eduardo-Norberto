import { Residence } from "./residence";
import { Client } from "./client";

export class ResidentialClient extends Residence implements Client {
    public clientName: string;
    public clientNumber: number;
    public consumedEnergy: number;

    constructor(
       clientName: string,
       clientNumber: number,
       consumedEnergy: number,
       name: string,
       cpf: string,
       cep: string 
    ){
        super(name, cpf, cep)
    }

    public calculateBill(): number {
        const bill = this.consumedEnergy * 0.75
        return bill
    }
}