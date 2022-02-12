function calcularPotencia(base, expoente){
    if(expoente == 0){
        return 1
    }

    let resultado = 1
    for(let i = 1; i <= expoente; i++){
        resultado *= base
    }

    return resultado
}

console.log(calcularPotencia(2, 3))
console.log(calcularPotencia(3, 2))
console.log(calcularPotencia(2, 1))
console.log(calcularPotencia(0, 0))