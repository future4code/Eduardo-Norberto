const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const operator = process.argv[4]
const add = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2

switch(operator){
    case 'add':
        console.log(`Resposta: ${add}`)
        break
    case 'sub':
        console.log(`Resposta: ${sub}`)
        break
    case 'mult':
        console.log(`Resposta: ${mult}`)
        break
    case 'div':
        console.log(`Resposta: ${div}`)
        break
    default:
        console.log("Erro na leitura do operador") 
        break;
}