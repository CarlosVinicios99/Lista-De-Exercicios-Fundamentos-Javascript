function isDiaUtil(numeroDoDia){

    switch(numeroDoDia){
        case 1: case 7:
            console.log("Fim de Semana!")
            break

        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia Util!")
            break
        
        default:
            console.log("Dia Invalido!")      
    }

}

isDiaUtil(1)
isDiaUtil(5)
isDiaUtil(0)
