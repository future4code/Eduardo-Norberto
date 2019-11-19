/****** 1 *********/
/**
 * Função de investimento de dinheiro, onde deve escolher o tipo de investimento e o valor a ser investido. O valor do após o investimento é 
 * o valor é retornado. Será impresso na tela o valor 165 referente ao novoMontante e no segundoMontante 200
 * 
 */
/*******2 ********/
/**
 * Array são elementos onde podemos guardar várias informações, podem ser usados em números, caracteres ou em ambos. Objeto são elementos onde podemos 
 * guardar informações mais especificas sobre o elemento. Utilizamos em um cadastro de pessoas. 
 *  
 */
/*******3 ********/
function criaRetangulo(lado1, lado2){
    const retatangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: (lado1 * lado2)
    }
    return retatangulo
}
 criaRetangulo(5, 2)