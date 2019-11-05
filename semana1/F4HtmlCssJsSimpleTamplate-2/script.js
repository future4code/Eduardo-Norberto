/**
 * Comece seu exercício aqui! :D
 * 
 * 
 * 1) Esse código testa um número que o usuário digito sendo armazenado na variavél
 * respostaDoUsuario, essa variavél é convertida no tipo Numbers e é alocada na  
 * variavél numero. Essa variavél é testa no operador condicional if. Que verifica se 
 * o número digitado tem resto da divisão igual a 0(zero), ou seja testa se o número 
 * é par ou ímpar. Se o número for PAR vai imprimir a mensagem "Passou no teste."
 * se  for IMPAR a mensagem será que "Não passou no teste."
 * 
 * 
 * 2)A)Um caixa eletrônico de um supermercado.
 * 
 * B)2.25
 * 
 * C)24.55
 * 
 * D)O preço da Pêra é R$ 5
 * 
 * 
 * 3)A mensagem que se espera ser imprimida no terminal é "Número 1 é menor ou igual   *  ao 2!". 
 * Esse código apresenta um erro.
 * O erro ocorre porque a variavél mensagem foi criada dentro do escopo do if,        * portanto não pode ser usada fora do bloco. Para o código funcionar a variavél 
 * mensagem deve ser declarada fora do bloco. 
 * 
 * 
 * 
 */
/***********EXERCÍCIO 1 A ************/


const n1 = Number(prompt('Digite um número: '))
const n2 = Number(prompt('Digite um número: '))

if (n1 > n2){
  console.log(n2, n1)
}else if (n2 > n1){
  console.log(n1, n2)
}else{
  console.log('Os número são iguais.')
}

/*********EXERCÍCIO 1 B **********/

/*R. Quando digita 3 números igual o programa não imprime */

// let n1 = Number(prompt('Digite um o 1º número: '))
// let n2 = Number(prompt('Digite um o 2º número: '))
// let n3 = Number(prompt('Digite um o 3º número: '))

// if (n1 < n2 && n2 < n3){
//   if(n2 < n3){
//     console.log(n3, n2, n1)
//   }else{
//     console.log(n2, n3, n1)
//   }
// }
// if(n2 < n1 && n2 < n3){
//   if(n1 < n3){
//     console.log(n3, n1, n2)
//   }else{
//     console.log(n1, n3, n2)
//   }
// }
// if (n3 < n1 && n3 < n2){
//   if(n1 < n2){
//     console.log(n2, n1, n3)
//   }else{
//     console.log(n1, n2, n3)
//   }
// }
 
/*********EXERCÍCIO 1 C **********/

// let n1 = Number(prompt('Digite um o 1º número: '))
// let n2 = Number(prompt('Digite um o 2º número: '))
// let n3 = Number(prompt('Digite um o 3º número: '))

// if( n1 === n2 && n2 === n3){
//   console.log('Digite pelo menos um número diferente.')
// }

// if (n1 < n2 && n2 < n3){
//   if(n2 < n3){
//     console.log(n3, n2, n1)
//   }else{
//     console.log(n2, n3, n1)
//   }
// }
// if(n2 < n1 && n2 < n3){
//   if(n1 < n3){
//     console.log(n3, n1, n2)
//   }else{
//     console.log(n1, n3, n2)
//   }
// }
// if (n3 < n1 && n3 < n2){
//   if(n1 < n2){
//     console.log(n2, n1, n3)
//   }else{
//     console.log(n1, n2, n3)
//   }
// }

/*************EXERCÍCIO 2 *********************/


// const classe = prompt('Digite [i] para Invertebrados ou [v] para Verterbrados:')

// if(classe === 'i'){
//   console.log('Invertebrado')
// }else{
//   const opcao1 = prompt('Tem pelos? [s/n]')
//   if (opcao1 === 's'){
//     const opcao2 = prompt('É um ser humano? [s/n]')
//     if(opcao2 === 's'){
//       console.log('Ser humano')
//     }else{
//       console.log('Mamífero não humano')
//     }
//   }else{
//     const opcao3 = prompt('Tem penas [s/n]')
//     if (opcao3 === 's'){
//       console.log('Aves')
//     }else{
//       const opcao4 = prompt('É terrestre? [s/n]')
//       if(opcao4 === 'n'){
//         console.log('Peixe')
//       }else{
//         const opcao5 = prompt('É Anfíbio? [s/n]')
//         if (opcao5 === 's'){
//           console.log('Anfíbio')
//         }else{
//         console.log('Réptil')
//       }
//       }
//   }
// }
// }
/*************EXERCÍCIO 3 **********************/

// const nomeCliente = prompt('Nome Completo: ')
// let tipoDeJogo = prompt('Digite [IN] para Jogo Internacional ou [DO] para Jogo Doméstico')
// let tipo = 0
// let etapaJogo = prompt('Digite [SF] para Semi-final/ [DT] para decisão do terceiro lugar / [FI] para Final:')
// let etapa = 0
// let categoria = Number(prompt('Selecione qual categoria deseja [1, 2, 3, 4]'))
// let cat = 0
// let quantIngresso = Number(prompt('Quantidade de Ingressos: '))
// let valorTotal = 0
// let valorPagar = 0

// switch (etapaJogo){
//   case 'SF':
//     etapa = 'Semi'
//     break

//   case 'DT':
//     etapa = 'Terceiro'
//     break

//   case 'FI':
//     etapa = 'Final'
//     break

//   default:
//     console.log('Opção Inválida!')
//     break
// }

// switch (categoria){
//   case 1:
//     cat = 1
//     break
  
//   case 2:
//     cat = 2
//     break
  
//   case 3:
//     cat = 3
//     break

//   case 4:
//     cat = 4
//     break
  
//   default:
//     console.log('Opção Inválida!')
//     break
// }

// if (etapa === 'Semi'){
//   if (cat === 1){
//     valorTotal = 1320
//   }
//   if (cat === 2){
//     valorTotal = 880
//   }
//   if (cat === 3){
//     valorTotal = 550
//   }
//   if (cat === 4){
//     valorTotal = 220
//   }
// }else if (etapa === 'Terceiro'){
//   if (cat === 1){
//     valorTotal = 660
//   }
//   if (cat === 2){
//     valorTotal = 440
//   }
//   if (cat === 3){
//     valorTotal = 330
//   }
//   if (cat === 4){
//     valorTotal = 170
//   }
// }else if (etapa === 'Final'){
//   if (cat === 1){
//     valorTotal = 1980
//   }
//   if (cat === 2){
//     valorTotal = 1320
//   }
//   if (cat === 3){
//     valorTotal = 880
//   }
//   if (cat === 4){
//     valorTotal = 330
//   }
// }
// if (tipoDeJogo === 'IN'){
//   tipo = 'Internacional'
//   valorTotal *= 4.1
//   valorPagar = (valorTotal * quantIngresso) 
// }else{
//   tipo = 'Nacional'
//   valorPagar = (valorTotal * quantIngresso)
// }
// console.log('---Dados da Compra---')
// console.log('Nome do Cliente:', nomeCliente)
// console.log('Tipo de jogo: ',tipo)
// console.log('Etapa do jogo: ', etapa)
// console.log('Categoria: ', cat)
// console.log('Quantidade de Ingressos: ', quantIngresso)
// console.log('---Valores---')
// console.log('Valor do ingresso: ', valorTotal)
// console.log('Valor Total: ',valorPagar)