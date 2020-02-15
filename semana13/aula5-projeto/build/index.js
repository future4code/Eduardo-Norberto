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
const eventoConta = {
    nome: process.argv[4],
    cpf: process.argv[5],
    dataNasc: moment(process.argv[6], "DD-MM-YYYY")
};
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
    armazenarLista.listaClientes.push(eventoConta);
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
    const dataNasc = eventoConta.dataNasc;
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