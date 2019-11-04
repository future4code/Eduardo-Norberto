/**
 * Comece seu exercício aqui! :D
 */
/**********EXERCÍCIO 1 - INTERPRETAÇÃO**********/
/*
* 1) 55
*
*
/**********EXERCÍCIO 2 - INTERPRETAÇÃO**********/
/** 
*
*
* 2) A) Acresenta um item na última posição o array
*
*
* B)[10, 15, 20, 25, 30]
*
*
* C) número = 4 => [12, 20]
*    número = 3 => [12, 15, 18, 27, 30]
*
*
*
*/



/**********EXERCÍCIO 4 LETRA A - ESCRITA DE CÓDIGO**********/




// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = arrayOriginal[0]
// let menor = arrayOriginal[0]

// for(let i = 0; i < arrayOriginal.length; i++){
//   const num = arrayOriginal[i]
//   if(num > maior){
//     maior = num
//   }else if(num < menor){
//     menor = num
//   }
// }
// console.log('O maior número é ', maior, 'e menor é ', menor)



/**********EXERCÍCIO 4 LETRA B - ESCRITA DE CÓDIGO**********/



// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArray = []
// let num = 0

// for(const item of arrayOriginal){
//   num = item / 10
//   novoArray.push(num)
// }
// console.log(novoArray)




/**********EXERCÍCIO 4 LETRA C - ESCRITA DE CÓDIGO**********/



// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArray = []
// let num = 2

// for(const item of arrayOriginal){
//   if(item % num !== 0){
//     novoArray.push(item)
//   }
// }
// console.log(novoArray)



/**********EXERCÍCIO 4 LETRA D - ESCRITA DE CÓDIGO**********/



// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArray = []

// for(let i = 0; i < arrayOriginal.length; i++){
//   novoArray.push('O elemento do índex '+ i +' é: '+ arrayOriginal[i])
// }
// console.log(novoArray)



/**********EXERCÍCIO 3 INTERPRETAÇÃO DE CÓDIGO**********/


/**
 * 3)0
 *   00
 *   000 
 *   0000
 * 
 */


/**********EXERCÍCIO 5  ESCRITA DE CÓDIGO**********/

// const num = prompt('Digite um número:')
// console.log('Vamos Jogar!')
// let resul = true
// let i = 0

// while (resul){
//   let resp = prompt('Adivinhe o número que estou pensando:')
//   i++
//   if (resp === num){
//     console.log('Acertou!! Foi o número:', resp)
//     console.log('O número de tentativas foi:',i)
//     resul = false
//   }
//   if(resp < num){
//     console.log('O número chutado foi:', resp)
//     console.log('Errrrrrrrou, é menor');
//   }
//   if (resp > num){
//     console.log('O número chutado foi:', resp)
//     console.log('Errrrrrrrou, é maior')
//   }
// }

/**********EXERCÍCIO 6  ESCRITA DE CÓDIGO**********/

const num = Math.floor((Math.random() * 10)+ 1)
console.log('Vamos Jogar!')
resul = false
i = 0
resp = 0

while (!resul){
  resp = Number(prompt('Adivinhe o número que estou pensando:'))
  i++
  if(resp < num){
    console.log('O número chutado foi:', resp)
    console.log('Errrrrrrrou, é menor');
  }else if (resp > num){
    console.log('O número chutado foi:', resp)
    console.log('Errrrrrrrou, é maior')
  }else{
    console.log('Acertou!! Foi o número:', resp)
    resul = true
  }
}
console.log('O número de tentativas foi:',i)