function Bhaskara(a, b, c){
    let delta = (Math.pow(b, 2) - 4 * a * c)

    if(delta < 0){
        return "Delta Negativo!"
    }

    raizes = []
    raizes[0] = (-b + Math.sqrt(delta)) / (2 - a)
    raizes[1] = (-b - Math.sqrt(delta)) / (2 - a)

    return raizes
}

console.log(Bhaskara(3, 5, -12))
console.log(Bhaskara(3, -5, 12))