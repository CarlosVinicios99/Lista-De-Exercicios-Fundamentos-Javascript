function procurarFruta(fruta){
    switch(fruta){
        case "maçã":
            console.log("Nao vendemos esta fruta aqui!")
            break

        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break

        case "melancia":
            console.log("aqui esta, sao 3 reais o Kg")
            break
        
        default:
            console.log("erro")
    }
}

procurarFruta("maçã")
procurarFruta("kiwi")
procurarFruta("melancia")