class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Programador web") {
        super(sobrenome)
        this.profissao = profissao
    } 
}

class Filho extends Pai {
    constructor() {
        super("Araújo")
        this.profissao = "Programador java"
    }
}

const filho = new Filho
console.log(filho)