class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() { //método

        console.log('meu nome é ' + this.nome)
    }
}

const p1 = new Pessoa('Dan')

p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = pessoa('Dan de novo')
p2.falar();

