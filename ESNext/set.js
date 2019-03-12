const times = new Set()

times.add('Sport')
times.add('Barcelona').add('Real Madrid').add('Náutico')

console.log(times)
console.log(times.size)
console.log(times.has('Sport'))

const jogadores = ['Diego Souza', 'André', 'Magrão', 'Durval']
const setJogadores = new Set(jogadores)

console.log(setJogadores)

