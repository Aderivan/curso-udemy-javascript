function notaDeAluno(nota){
    if(nota >= 7)
        console.log(nota)
    
    console.log('Final')
}

notaDeAluno(6)
notaDeAluno(8)

//Ele sempre executará o console final por tá fora do IF

function notaDeAluno2(nota) {
    if(nota >= 7); {
        console.log(nota)
    }
}


// Vai imprimir os dois valores, pois, a vírgula pós IF finaliza o bloco. 
notaDeAluno2(7);
notaDeAluno2(8);