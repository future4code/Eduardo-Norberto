const fs = require('fs')
const data = '\nComprar Pão'
const data1 = '\nComprar Sabonete'
const data2 = '\nComprar Leite'
const fileName = "tarefas.txt"

try{
    fs.writeFileSync(fileName, data, data1, data2)
    console.log("Arquivo criado com sucesso!")
}catch(e){
    console.error(e)
}