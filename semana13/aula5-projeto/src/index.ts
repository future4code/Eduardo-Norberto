import * as fs from "fs"
import * as moment from "moment"

const cadastroUsuario: string = "cadastro.json"

moment.locale("pt-br")

type conta = {
    nome: string,
    cpf: string,
    dataNasc: moment.Moment
}

type despresa = {
    valor: number,
    data: moment.Moment,
    desc: string,
}

type listaContas = {
    listaClientes: conta[]
}

const eventoConta: conta = {
    nome: process.argv[4],
    cpf: process.argv[5],
    dataNasc: moment(process.argv[6], "DD-MM-YYYY")
}

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
    armazenarLista.listaClientes.push(eventoConta)
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


const verificarMaiorIdade = () =>{
    const dataAtual = moment()
    const dataNasc = eventoConta.dataNasc
    const diferenca: number = dataAtual.diff(dataNasc, "years")
    
    if(diferenca >= 18){
        return true
    } else {
        return false
    }
}

const init = async () => {
    if (verificarMaiorIdade()){
        createAccount()
    } else {
        console.error("Somente maiores 18 anos pode criar conta em nosso banco!")
    }
    
}
init()
