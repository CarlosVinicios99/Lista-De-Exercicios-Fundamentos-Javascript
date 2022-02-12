function calcularJurosSimples(capitalInicial, taxaDeJuros, tempo){
    return capitalInicial * (1 + taxaDeJuros * tempo)}

function calcularJurosCompostos(capitalInicial, taxaDeJuros, tempo){
    return capitalInicial * (1 + taxaDeJuros) * tempo
}

console.log(calcularJurosSimples(1000, 0.12, 1).toFixed(2))        //tempo em anos
console.log(calcularJurosCompostos(1000, 0.015, 12).toFixed(2))    //tempo em meses