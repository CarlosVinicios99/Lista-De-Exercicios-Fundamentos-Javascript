function calcularFatorial(numero){
    if(numero == 0){
        return 1
    }

    let resultado = numero
    for(let i = 1; i < numero; i++){
        resultado *= i
    }
    return resultado
}

console.log(calcularFatorial(0))
console.log(calcularFatorial(1))
console.log(calcularFatorial(4))
console.log(calcularFatorial(5))
console.log(calcularFatorial(7))