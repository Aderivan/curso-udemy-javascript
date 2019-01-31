function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem vindo', 1)
const aula2 = new Aula('Hello Word', 2)

console.log(aula1, aula2)

// como funciona o new

function novo (f, ...params) {
    const obj = {}
    obj.__proto__ =  f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'primeiro código', 3)
const aula4 = novo(Aula, 'exercício', 4)
console.log(aula3, aula4)