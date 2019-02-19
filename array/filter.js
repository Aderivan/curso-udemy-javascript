const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'idap Pro', preco: 4199, fragil: true },
    { nome: 'codo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de Plástico', preco: 18.99, fragil: false }
]


console.log(produto.filter(function (p) {
    return false
}))

const frageis = e => e.fragil
const precoCaro = e => e.preco >= 500

console.log(produto.filter(frageis).filter(precoCaro))

// O filter gera um array com os parâmetros informados na função.
