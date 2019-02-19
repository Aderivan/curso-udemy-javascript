Array.prototype.filter2 = function (callback) {
    const arrayDoFilter = []

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            arrayDoFilter.push(this[i])
        }
    }

    return arrayDoFilter
}

const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'idap Pro', preco: 4199, fragil: true },
    { nome: 'codo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de Plástico', preco: 18.99, fragil: false }
]



const frageis = e => e.fragil
const precoCaro = e => e.preco >= 500

console.log(produto.filter2(frageis).filter2(precoCaro))
