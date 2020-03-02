"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
const cadastroUsuario = "cadastro.json";
moment.locale("pt-br");
class UserAccount {
    constructor(name, cpf, age, balance, transactions) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = balance;
        this.transactions = transactions;
    }
}
const newAccount = new UserAccount('Maria', '789.456.123-00', moment("2001-10-10"), 150, []);
const analizarDadosConta = new Promise((res, rej) => {
    fs.readFile(cadastroUsuario, (err, data) => {
        if (err) {
            rej(err);
            return;
        }
        res(data.toString());
    });
});
const createAccount = () => __awaiter(void 0, void 0, void 0, function* () {
    const armazenarLista = yield getAllAccounts();
    armazenarLista.listaClientes.push(newAccount);
    const todasContas = JSON.stringify(armazenarLista);
    fs.writeFile(cadastroUsuario, todasContas, "utf8", (err) => {
        if (err) {
            console.error(err);
        }
    });
});
const getAllAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    const dadosConta = yield analizarDadosConta;
    const todasContas = JSON.parse(dadosConta);
    return todasContas;
});
const verificarMaiorIdade = () => {
    const dataAtual = moment();
    const dataNasc = newAccount.age;
    const diferenca = dataAtual.diff(dataNasc, "years");
    if (diferenca >= 18) {
        return true;
    }
    else {
        return false;
    }
};
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    if (verificarMaiorIdade()) {
        createAccount();
    }
    else {
        console.error("Somente maiores 18 anos pode criar conta em nosso banco!");
    }
});
init();
//# sourceMappingURL=index.js.map