const jogadoresDoSport  = ['Magrão', 'Durval', 'Diego Souza', 'Russo']

jogadoresDoSport.pop() //Método push tira o último elemento do Array
console.log(jogadoresDoSport)

jogadoresDoSport.push('Dultra') //Coloca um novo elemento na array
console.log(jogadoresDoSport)

jogadoresDoSport.shift() //Tira o primeiro elemento da array
console.log(jogadoresDoSport)

jogadoresDoSport.unshift('Ciro', 'Hamilton') //Coloca novos elementos no início da array
console.log(jogadoresDoSport)

 //método splice pode adicionar e remover

 jogadoresDoSport.splice(2, 1) //O primeiro método é para informar o índice / o segundo para informar
//  A partir desse índice, exclua x elementos. No exemplo acima, apenas um elemento, ou seja, Durval
 console.log(jogadoresDoSport) 

 jogadoresDoSport.splice(3, 0, 'André', 'Sander') //Para adicionar, eu informo que, a partir do índice x
//  adicione tais elementos (o zero significa que não será excluído elementos)
 console.log(jogadoresDoSport)

 const jogadoresTransferidos = jogadoresDoSport.slice(3)
 console.log(jogadoresTransferidos)
//  O slice cria um novo array

const outrosJogadoresTransferidos = jogadoresDoSport.slice(3, 5)
 console.log(outrosJogadoresTransferidos)
//  O índice 5 não é transferido. Apenas 3 e 4
