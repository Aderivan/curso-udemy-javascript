function meuNome(nome){
    return {
        mostrarNome: () => console.log(`Meu nome é ${nome}`)
    }
}

const nomeDaPessoa = new meuNome('José')
nomeDaPessoa.mostrarNome()


function MeuNome2(nome){
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new MeuNome2('Dan')
p1.falar()