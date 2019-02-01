let familia = new Array('Dan', 'Vivi', 'Dedei')

console.log(familia)

familia = ['Dan', 'Vivi', 'Dedei']
console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])

familia[3] = 'Alice' //Uma forma de acrescentar um novo elemeto ao array
console.log(familia)

familia.push('Lara') //Acrescenta um novo elemento no último índice do array
console.log(familia)

console.log(familia.length)

familia.sort() //Ordena os elementos do array
console.log(familia) 

delete familia[4] //Mesmo deletando, os elementos do array continuam ordenados 
// O índice 4 continua ordenado no array, porém, com valor undefined
console.log(familia)

familia = ['Cardoso', 'Dan', 'Dedei']
familia.splice(1, 2, 'Edgar', 'Vivi') // O primeiro parâmetro é para informar o índice. O segundo, para informar até onde excluir
// No exemplo acima, ele exclui a partir do Dan até Dedei.
// Após isso, as duas String significa os novos elementos que irão etrar no array
// Passando o segundo parâmetro como 0 (1,0), ele vai colocar, a partir desse índice, os novos elementos
console.log(familia)

