function dividir(dividendo, divisor){
    const divisao = Math.floor(dividendo / divisor)
    const restoDaDivisao = dividendo % divisor

    console.log(`resultado: ${divisao}`)
    console.log(`resto: ${restoDaDivisao}`)
}

dividir(3, 5)
dividir(4, 5)
dividir(6, 4)