const imprimirNotaDoAluno = function (nota) {
    if(nota >= 7){
        console.log('Aluno aprovado com a nota: '+ nota);
    }else if ( nota > 6 ) {
        console.log('Aluno em recuperação com a nota: '+ nota);
    }else{
        console.log('Aluno reprovado com a nota: '+ nota)
    }
}

imprimirNotaDoAluno(10);
imprimirNotaDoAluno(6.9);
imprimirNotaDoAluno(5.9);

// Outro exemplo com if else if

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0,3.99)) {
        console.log('Reprovado')
    }else {
        console.log('Valor inválido')
    }

    console.log('Fim')
}

imprimirResultado(10)