function aumentarSalario(plano, salarioAtual){

    switch(plano){
        case 'A':
            salarioAtual += salarioAtual * 0.10
            console.log(`novo salario: R$${salarioAtual.toFixed(2)}`)
            break

        case 'B':
            salarioAtual += salarioAtual * 0.15
            console.log(`novo salario: R$${salarioAtual.toFixed(2)}`)
            break

        case 'C':
            salarioAtual += salarioAtual * 0.20
            console.log(`novo salario: R$${salarioAtual.toFixed(2)}`)
            break

        default:
            console.log("Plano invalido!")
    }
}

aumentarSalario('A', 2000)
aumentarSalario('B', 2000)
aumentarSalario('C', 2000)
aumentarSalario('D', 2000)