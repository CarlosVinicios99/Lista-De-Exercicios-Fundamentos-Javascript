function multiplicarValores(valores, multiplicador){
    for(let i in valores){
        valores[i] *= multiplicador
    }
    return valores
}

function multiplicarValores2(valores, multiplicador){
    if(multiplicador > 5){
        for(let i in valores){
            valores[i] *= multiplicador
        }
        return valores
    }
    else{
        return "Numero nao eh maior que 5"
    }
}

console.log(multiplicarValores([1, 2, 3], 2))
console.log(multiplicarValores2([1, 1, 1], 6))
console.log(multiplicarValores2([1, 2, 3], 4))
