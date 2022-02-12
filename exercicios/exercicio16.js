function calculadora(valor1, operacao, valor2){
    switch(operacao){
        case '+':
            console.log(valor1 + valor2)
            break

        case '-':
            console.log(valor1 - valor2)
            break

        case '*':
            console.log(valor1 * valor2)
            break

        case '/':
            console.log(valor1 / valor2)
            break
        
        default:
            console.log("Operacao Invalida!")
    }
}

calculadora(2, '+', 3)
calculadora(2, '-', 3)
calculadora(2, '*', 3)
calculadora(2, '/', 3)
calculadora(2, "**", 3)