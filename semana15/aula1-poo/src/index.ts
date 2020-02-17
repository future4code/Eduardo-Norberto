import * as fs from "fs"
import * as moment from "moment"

const cadastroUsuario: string = "cadastro.json"

moment.locale("pt-br")

class UserAccount {
    private name: string
    private cpf: string
    public age: moment.Moment
    private balance: number
    private transactions: []

    constructor(name: string, cpf: string, age: moment.Moment, balance: number, transactions: []){
        this.name = name
        this.cpf = cpf
        this.age = age
        this.balance = balance
        this.transactions = transactions
    }
}


type despresa = {
    valor: number,
    data: moment.Moment,
    desc: string,
}

type listaContas = {
    listaClientes: UserAccount[]
}


const newAccount = new UserAccount('Maria', '789.456.123-00', moment("2001-10-10"), 150, [])

const analizarDadosConta: Promise<string> = new Promise((res, rej) => {
    fs.readFile(cadastroUsuario, (err: Error, data: Buffer) => {
        if (err) {
            rej(err)
            return
        }
        res(data.toString())
    })
})

const createAccount = async () => {
    const armazenarLista = await getAllAccounts()
    armazenarLista.listaClientes.push(newAccount)
    const todasContas = JSON.stringify(armazenarLista)
    fs.writeFile(cadastroUsuario, todasContas, "utf8", (err: Error) => {
        if (err) {
            console.error(err)
        }
    })
}

const getAllAccounts = async () => {
    const dadosConta = await analizarDadosConta
    const todasContas = JSON.parse(dadosConta)
    return todasContas
}


const verificarMaiorIdade = () => {
    const dataAtual = moment()
    const dataNasc = newAccount.age
    const diferenca: number = dataAtual.diff(dataNasc, "years")

    if (diferenca >= 18) {
        return true
    } else {
        return false
    }
}

const init = async () => {
    if (verificarMaiorIdade()) {
        createAccount()
    } else {
        console.error("Somente maiores 18 anos pode criar conta em nosso banco!")
    }

}
init()