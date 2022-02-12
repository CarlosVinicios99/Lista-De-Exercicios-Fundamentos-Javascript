function calcularItem(codigo, quantidade){
    let valorTotal = 0

    switch(codigo){
        case 100:
            valorTotal = quantidade * 3.00
            console.log(`Valor Total: R$${valorTotal.toFixed(2).toString().replace(".", ",")}`)
            break

        case 200:
            valorTotal = quantidade * 4.00
            console.log(`Valor Total: R$${valorTotal.toFixed(2).toString().replace(".", ",")}`)
            break

        case 300:
            valorTotal = quantidade * 5.50
            console.log(`Valor Total: R$${valorTotal.toFixed(2).toString().replace(".", ",")}`)
            break

        case 400:
            valorTotal = quantidade * 7.50
            console.log(`Valor Total: R$${valorTotal.toFixed(2).toString().replace(".", ",")}`)
            break

        case 500:
            valorTotal = quantidade * 3.50
            console.log(`Valor Total: R$${valorTotal.toFixed(2).toString().replace(".", ",")}`)
            break

        case 600:
            valorTotal = quantidade * 2.80
            console.log(`Valor Total: R$${valorTotal.toFixed(2).toString().replace(".", ",")}`)
            break
        
        default:
            console.log("produto nao existente")
    }
}

for(let codigo = 100; codigo < 800; codigo += 100){
    calcularItem(codigo, 2)
}