// ES8: Object.values / Object.entries

// Melhorias na notação literal

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// class

class animal {}
class Cachorro extends animal {
    falar() {
        return 'au au!'
    }
}

console.log(new Cachorro().falar())