const isIgual = (caractere1, caractere2) => caractere1 == caractere2

function compararCaracteres(palavra1, palavra2){
    palavra1 = palavra1.toLowerCase()
    palavra2 = palavra2.toLowerCase()

    let possuiCaractere = false
    for(let i in palavra1){
        for(let j in palavra2){
            if(isIgual(palavra1[i], palavra2[j])){
                possuiCaractere = true
            }
        }
        if(!possuiCaractere){
            return false
        }
    }

    return true
}

console.log(compararCaracteres("Abcd", "bdac"))
console.log(compararCaracteres("nhd", "HDN"))
console.log(compararCaracteres("abc", "def"))