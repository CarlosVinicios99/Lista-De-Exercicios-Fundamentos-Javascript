function obterMenorPontuacao(pontuacoes){
    let menorPontuacao = pontuacoes[0]

    for(let i in pontuacoes){
        if(menorPontuacao > pontuacoes[i]){
            menorPontuacao = pontuacoes[i]
        }
    }

    return menorPontuacao
}

function obterNumeroDoJogoComMenorPontuacao(pontuacoes){
    const menorPontuacao = obterMenorPontuacao(pontuacoes)

    for(let i in pontuacoes){
        if(pontuacoes[i] == menorPontuacao){
            return Number.parseInt(i) + 1
        }
    }
}

function obterRecordes(pontuacoesAnotadas){
    const pontuacoesOrganizadas = pontuacoesAnotadas.split(" ")

    let pontuacoesPorJogo = []
    let vezesEmQueBateuRecordeDePontos = 0
    let maiorPontuacaoAtual = Number.parseInt(pontuacoesOrganizadas[0])


    for(let i = 0; i < pontuacoesOrganizadas.length; i++){
        pontuacoesPorJogo.push(Number.parseInt(pontuacoesOrganizadas[i]))

        if(i > 0){
            if(pontuacoesPorJogo[i] > maiorPontuacaoAtual){
                vezesEmQueBateuRecordeDePontos++
                maiorPontuacaoAtual = pontuacoesPorJogo[i]
            }
        }
    }
    let recordes = [vezesEmQueBateuRecordeDePontos]
    recordes.push(obterNumeroDoJogoComMenorPontuacao(pontuacoesPorJogo))
    return recordes
}

console.log(obterRecordes("10 20 20 8 25 3 0 30 1"))