function conceituarNotas(notas){
    for(let i in notas){

        if(notas[i] <= 4.9){
            console.log(`Nota: ${notas[i].toFixed(1)} conceito D`)
        }

        else if(notas[i] <= 6.9){
            console.log(`Nota: ${notas[i].toFixed(1)} conceito C`)
        }

        else if(notas[i] <= 8.9){
            console.log(`Nota: ${notas[i].toFixed(1)} conceito B`)
        }

        else if(notas[i] <= 10){
            console.log(`Nota: ${notas[i].toFixed(1)} conceito A`)
        }

        else{
            console.log("Nota Invalida")
        }
    }
}

conceituarNotas([8.5, 3.2, 9.5, 7.7, 6.2, 15.3])