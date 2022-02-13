function imprimirImparesNoIntervalo(a = 0, b  = 100){
    if(a > b){
        [b, a] = [a, b]
    }

    for(let i = a; i <= b; i++){
        if(i % 2 > 0){
            console.log(i)
        }
    }
}

imprimirImparesNoIntervalo(6, 1)
