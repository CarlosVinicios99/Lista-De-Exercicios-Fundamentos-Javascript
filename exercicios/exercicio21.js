function calcularPlanoDeSaude(idade){
    let valorTotal = 100
    if(idade < 10){
        valorTotal += 80
    }

    else if(idade < 30){
        valorTotal += 50
    }

    else if(idade < 60){
        valorTotal += 95
    }

    else{
        valorTotal += 130
    }

    return valorTotal
}

console.log(calcularPlanoDeSaude(8))
console.log(calcularPlanoDeSaude(15))
console.log(calcularPlanoDeSaude(32))
console.log(calcularPlanoDeSaude(64))