function comprarCarro(modelo){
    switch(modelo){
        case "hatch":
            console.log("Compra Efetuada com sucesso")
            break
        
        case "sedan": case "motocicleta": case "caminhonete":
            console.log("Tem certeza que nao prefere este modelo")
            break

        default:
            console.log("Nao trabalhamos com este tipo de automovel aqui")
    }
}

comprarCarro("hatch")
comprarCarro("sedan")
comprarCarro("caminhonete")
comprarCarro("motocicleta")
comprarCarro("esportivo")