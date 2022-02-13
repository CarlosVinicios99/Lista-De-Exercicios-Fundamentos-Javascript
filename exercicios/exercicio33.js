function imprimirVetores(vetorInteiros, vetorString, vetorDouble){
    let resultado = vetorString.concat(vetorInteiros.toString()).concat(vetorDouble.toString())
    console.log(resultado)
}

imprimirVetores([1, 2, 3, 4], ["a", "b", "c", "d"], [1.1, 1.2, 1.3, 1.4])