function contarNumerosNegativos(valores){
    let contadorNumerosNegativos = 0
    for(let i in valores){
        if(valores[i] < 0){
            contadorNumerosNegativos++
        }
    }

    console.log(contadorNumerosNegativos + " numeros negativos")
}

contarNumerosNegativos([10, 5, -3, 4, 7, -4, - 8, 11, -9, 3, 6])