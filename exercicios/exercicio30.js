function obterMenorValor(valores){
    let menorValor = valores[0]

    for(let i in valores){
        if(menorValor > valores[i]){
            menorValor = valores[i]
        }
    }

    return menorValor
}

function obterMaiorValor(valores){
    let maiorValor = valores[0]

    for(let i in valores){
        if(maiorValor < valores[i]){
            maiorValor = valores[i]
        }
    }

    return maiorValor
}

const valores = [10, 1, 25, 18, 15, 13, 9, 31, 28, 7, 4]

console.log(obterMaiorValor(valores))
console.log(obterMenorValor(valores))