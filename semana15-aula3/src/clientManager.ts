import { Client } from "./client"

export class ClientManager {
    public clients: Client[]

    constructor() {
        this.clients = []
    }

    public addClient(client: Client): void {
        this.clients.push(client)
    }

    public getClientsQuantity(): void {
        console.log(`A concessionára possui ${this.clients.length} clientes cadastrados`)
    }

    public printCellBills(): void {
        this.clients.forEach(client => {
            console.log(`${client.clientNumber} - ${client.clientName} - ${client.calculateBill()}`)
        })
    }

    public calculateAllIncome(): void {
        let incomeSource: number = 0
        this.clients.forEach(client => {
            incomeSource += client.calculateBill()
        })
        console.log(`A concessionária obteve a renda bruta de ${incomeSource.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
    }
}