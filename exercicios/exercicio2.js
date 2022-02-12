const isEquilatero = (lado1, lado2, lado3) => (lado1 == lado2) && (lado2 == lado3)

const isEscaleno = (lado1, lado2, lado3) => (lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3)

const isIsosceles = (lado1, lado2, lado3) => {

   return !isEquilatero(lado1, lado2, lado3) && !isEscaleno(lado1, lado2, lado3)

}

function classificarTriangulo(lado1, lado2, lado3){

    if(isEquilatero(lado1, lado2, lado3)){
        return "Equilatero"
    }

    if(isEscaleno(lado1, lado2, lado3)){
        return "Escaleno"
    }

    if(isIsosceles(lado1, lado2, lado3))
    {
        return "Isosceles"
    }
}

console.log(classificarTriangulo(1, 1, 1))
console.log(classificarTriangulo(1, 2, 2))
console.log(classificarTriangulo(1, 2, 3))