function obterMaiorNota(nota1, nota2, nota3){
    if(nota1 > nota2){
        if(nota1 > nota3){
            return nota1
        }
        else{
            return nota3
        }
    }

    else if(nota2 > nota3){
        return nota2
    }

    else{
        return nota3
    }
}

const isAprovado = media => media >= 5

function calcularMedia(nota1, nota2, nota3){
    let maiorNota = obterMaiorNota(nota1, nota2, nota3)
    let media = 0

    if(maiorNota == nota1){
        media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / (4 + 3 + 3)
    }

    else if(maiorNota == nota2){
        media = (nota1 * 3 + nota2 * 4 + nota3 * 3) / (4 + 3 + 3)
    }

    else{
        media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / (4 + 3 + 3)
    }

    console.log(`Media: ${media.toFixed(1)}`)

    if(isAprovado(media)){
        console.log("Aprovado!")
    }

    else{
        console.log("Reprovado!")
    }
}

calcularMedia(4, 5, 6)
calcularMedia(2, 7, 8)