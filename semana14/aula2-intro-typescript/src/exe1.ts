const numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

type numero = {
    totalSoma: Number,
    totalNum: Number,
    totalImpares: Number
}

const calcularNumeros = (numeros: number[]): numero => {
    let total = 0
    let impares = 0
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]
        if (numeros[i] % 2 !== 0) {
            impares ++;
        }
    }

    const resposta: numero = {
        totalSoma: numeros.length,
        totalNum: total,
        totalImpares: impares,
    }
    return resposta
}

const dadosResultado: numero = calcularNumeros(numeros)

console.log(dadosResultado)


