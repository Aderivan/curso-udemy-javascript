const pessoa = {
    nome: 'Rebecca',
    idade: 28,
    peso: 55
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});



Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Se a propriedade tá passiva a ser listada
    writable: false, //se vai aceitar se modificada
    value: '01/01/2019' //valor padrão e congela a iformação
})

pessoa.dataNascimento = '01/02/2017'
console.log(pessoa.dataNascimento)

// assign < Ele assina (sobescreve) os outros valores pós primeiro parÂmetro, que será o destino.

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)

console.log(obj)