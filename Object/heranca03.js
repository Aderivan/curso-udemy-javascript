const pai = {nome: 'Pedro', corDoCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Andreza'
console.log(filha1.nome, filha1.corDoCabelo) //herda a cor do cabelo do pai por não ter atribuído à ela

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Outro Nome'
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// função hasOwnProperty informa se o objeto veio do atributo ou da herança
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log( `Por herança`)
}

