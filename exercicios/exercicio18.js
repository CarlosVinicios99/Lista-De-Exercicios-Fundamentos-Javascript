function escreverNumeroPorExtenso(numero){
    let numeroPorExtenso = ""
    switch(numero){

        case 0:
            numeroPorExtenso = "zero"
            break

        case 1:
            numeroPorExtenso = "um"
            break
        
        case 2:
            numeroPorExtenso = "dois"
            break

        case 3:
            numeroPorExtenso = "tres"
            break

        case 4:
            numeroPorExtenso = "quatro"
            break
        
        case 5:
            numeroPorExtenso = "cinco"
            break
        
        case 6:
            numeroPorExtenso = "seis"
            break
        
        case 7:
            numeroPorExtenso = "sete"
            break
        
        case 8:
            numeroPorExtenso = "oito"
            break
        
        case 9:
            numeroPorExtenso = "nove"
            break
        
        case 10:
            numeroPorExtenso = "dez"
            break
        
        default:
            numeroPorExtenso = "Fora do intervalo!"
    }
    return numeroPorExtenso
}

for(let i = 0; i <= 11; i++){
    console.log(escreverNumeroPorExtenso(i))
}