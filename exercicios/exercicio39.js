function trocarValores(vetor1, vetor2){
    [vetor1, vetor2] = [vetor2, vetor1]
    console.log(vetor1, vetor2)
}

trocarValores([1, 2], [3, 4])