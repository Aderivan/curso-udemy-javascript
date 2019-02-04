const carrinho = [
    '{"nome": "Borracha", "preco": 3.45} ', 
    '{"nome": "Caderno", "preco": 13.90} ', 
    '{"nome": "Kit de lápis", "preco": 41.22} ', 
    '{"nome": "Caneta", "preco": 7.50} ', 
]

const novoObjeto = json => JSON.parse(json)
const precoDoProduto = produto => produto.preco

const resultado = carrinho.map(novoObjeto).map(precoDoProduto)

console.log(resultado)


/*
Assim eu cheguei no resultado final 

const array = Object.keys(carrinho).map(e => JSON.parse(carrinho[Number(e)]));


array.forEach(function(i,j){
    console.log(i.preco)
    })
*/