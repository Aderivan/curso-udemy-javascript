const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react').framework)


const chavesVariadas = new Map([
    [function () {}, 'função'], 
    [{}, 'Objeto'],
    [123, 'Números']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) //o has informa se o valor tá ou não contido dentro do Map.
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)