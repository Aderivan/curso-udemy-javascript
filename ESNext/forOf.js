for(let letras of "Cod3r") {
    console.log(letras)
}

const assuntoEcma = ['Map', 'Set', 'Promise']

for(let i in assuntoEcma) {
    console.log(i)
}

for(let assunto of assuntoEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
['Map', {abordado: true}],
['Set', {abordado: true}], 
['promise', {abordado: false}]
])

for (let assuntos of assuntoMap) {
    console.log(assuntos)
}

for(let assuntosValores of assuntoMap.keys()) {
    console.log(assuntosValores)
}

for(let assuntosValores2 of assuntoMap.values()) {
    console.log(assuntosValores2)
}

for(let [ch, vl] of assuntoMap.entries()) {

    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}
