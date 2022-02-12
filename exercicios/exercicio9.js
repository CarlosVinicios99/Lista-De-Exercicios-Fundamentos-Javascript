function ProcessarNota(nota){
    if(nota < 38){
        console.log(`nota: ${nota}`)
        console.log("Reprovado!")
    }

    else{
        let diferenca = nota % 5

        if(diferenca > 0){
            nota += 5 - diferenca
        }
    
        console.log(`nota: ${nota}`)
        console.log("Aprovado!")
    }
}

ProcessarNota(37)
ProcessarNota(38)
ProcessarNota(85)
ProcessarNota(91)