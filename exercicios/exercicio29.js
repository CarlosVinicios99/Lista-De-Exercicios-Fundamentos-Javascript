function obterValoresNoIntervalo(valores){
    let valoresNoIntervalo = 0

    for(let i in valores){
        if(valores[i] >= 10 && valores[i] <= 20){
            valoresNoIntervalo++
        }
    }

    console.log(`Valores no intervalo [10, 20]: ${valoresNoIntervalo}`)
    console.log(`Valores fora do intervalo [10, 20]: ${valores.length - valoresNoIntervalo}`)
}

obterValoresNoIntervalo([11, 14, 9, 3, 17, 15, 20, 6])