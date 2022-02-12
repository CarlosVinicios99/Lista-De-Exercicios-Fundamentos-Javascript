function calcularCedulas(quantia){
    let notasDe100 = 0
    let notasDe50 = 0
    let notasDe10 = 0
    let notasDe5 = 0
    let notasDe1 = 0

    while(quantia != 0){

        if(quantia >= 100){
            notasDe100++
            quantia -= 100
        }

        else if(quantia >= 50){
            notasDe50++
            quantia -= 50
        }

        else if(quantia >= 10){
            notasDe10++
            quantia -= 10
        }

        else if(quantia >= 5){
            notasDe5++
            quantia -= 5
        }

        else{
            notasDe1++
            quantia -= 1
        }
    }

    if(notasDe100 > 0){
        console.log(`${notasDe100} nota(s) de R$ 100`)
    }

    if(notasDe50 > 0){
        console.log(`${notasDe50} nota(s) de R$ 50`)
    }

    if(notasDe10 > 0){
        console.log(`${notasDe10} nota(s) de R$ 10`)
    }

    if(notasDe5 > 0){
        console.log(`${notasDe5} nota(s) de R$ 5`)
    }

    if(notasDe1 > 0){
        console.log(`${notasDe1} nota(s) de R$ 1`)
    }
}

calcularCedulas(100)
calcularCedulas(18)