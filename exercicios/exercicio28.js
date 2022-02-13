function verificarParidadeDosElementos(elementos){
    let elementosPares = 0, elementosImpares = 0

    for(let i in elementos){
        if(elementos[i] % 2 == 0){
            elementosPares++
        }
        else{
            elementosImpares++
        }
    }

    console.log(`Total de elementos: ${elementos.length}`)
    console.log("Elementos pares: " + elementosPares)
    console.log("Elementos Impares: " + elementosImpares)
}

verificarParidadeDosElementos([1, 2, 3, 4, 5, 10, 20])