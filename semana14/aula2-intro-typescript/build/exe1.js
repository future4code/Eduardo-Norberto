var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var calcularNumeros = function (numeros) {
    var total = 0;
    var impares = 0;
    for (var i = 0; i < numeros.length; i++) {
        total += numeros[i];
        if (numeros[i] % 2 !== 0) {
            impares++;
        }
    }
    var resposta = {
        totalSoma: numeros.length,
        totalNum: total,
        totalImpares: impares
    };
    return resposta;
};
var dadosResultado = calcularNumeros(numeros);
