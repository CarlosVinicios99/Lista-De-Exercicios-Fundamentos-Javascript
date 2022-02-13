function calcularMediaAritmetica(valores){
    let total = 0
    for(let i in valores){
        total += valores[i]
    }

    console.log(`Media: ${(total / valores.length).toFixed(1)}`)
}

calcularMediaAritmetica([8, 8, 20, 23, 53, 65, 3, 13])