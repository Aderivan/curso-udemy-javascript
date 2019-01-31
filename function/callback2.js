const notas = [7.7, 5.2, 9.0, 5];

// Sem callback

const notasAltas = [];

for(i in notas){
    if(notas[i] >= 7){
        notasAltas.push(notas[i])
    }
}

console.log('suas notas altas: ' + notasAltas);

// con calback

const notasBaixas = notas.filter(function(notas){
    return notas < 7
})

console.log('Sua notas altas: ' + notasBaixas)

const notasBaixas2 = notas.filter(notas => notas < 7)

console.log(notasBaixas2)


const notaMenorQue7 = notas  => notas < 7
const notasBaixas3 = notas.filter(notaMenorQue7)
console.log(notasBaixas3)