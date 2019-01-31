function criarProduto(nomeDoProduto = 'Produto padrão', PrecoDoProduto = 20) {
    return {
        nomeDoProduto,
        PrecoDoProduto,
        desconto: 0.1
    }
} 

console.log(criarProduto('notebok', 2199,90))
console.log(criarProduto('ipad', 1199,49))
console.log(criarProduto())