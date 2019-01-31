// Object.preventExtensions = não deixa adicionar mais propriedades ao objetos, apenas deletar e modificar as propriedades pré definidas

const produto = Object.preventExtensions ({
    nome: 'Qualquer coisa', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.name = 'Outro nome qualquer'
produto.descricao = 'não vai ser adicionado'
delete produto.tag
console.log(produto)

// Object.Seal = selar o objeto (não consegue adicionar e nem excluir atributos no objeto, mas consegue modificar)

const pessoa = {nome: 'Dan', idade: 29}

Object.seal(pessoa)

delete pessoa.nome
pessoa.descricao = 'Araujo'
pessoa.nome = 'teste'
console.log(pessoa)

console.log('Selado', Object.isSealed(pessoa))