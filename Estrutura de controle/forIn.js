const notas = [6.1, 7.1, 8.5, 10];

for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'José',
    idade: 29,
    altura: 1.84,
    peso: 84
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}