function isAnoBissexto(ano){
    let isBissexto = ano % 4 == 0

    if(isBissexto){
        console.log(`${ano} eh Bissexto`)
    }
    else{
        console.log(`${ano} nao eh Bissexto`)
    }

    return isBissexto
}

console.log(isAnoBissexto(1999))
console.log(isAnoBissexto(2016))
console.log(isAnoBissexto(2018))