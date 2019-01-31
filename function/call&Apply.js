function getPreco (imposto = 0 , moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4150,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) //retorna Not a number (NaN)

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // traz o resultado esperado por acessar o this

console.log(produto.getPreco()) // Traz os dados necessários do objeto produto


const carro = {preco: 20000, desc: 0.20}
console.log(getPreco.call(carro)) //Traz o contexto das informações do objeto carro

console.log(getPreco.apply(carro)) // tbm traz o contexto das informações do objet carro

console.log(getPreco.call(carro, 0.17, '$'))

console.log(getPreco.apply(carro, [0.17, '$']))

// A diferença dos dois é que o call não é necessário array, enquanto o apply necessita 