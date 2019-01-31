const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    maisAceleracao(delta) {
        if(delta + this.velocidadeAtual <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta
        }else {
            this.maisAceleracao = this.velocidadeMaxima
        }
    },

    status() {
        return `Modelo do carro: ${this.modelo} Velocidade atual: ${this.velocidadeAtual}KM/h de Velocidade máxima: ${this.velocidadeMaxima}KM/h`
    }
}

const volkswage = {
    modelo: 'Gol',
    velocidadeMaxima: 160
}

const fiat = {
    modelo: 'Uno',
    status() {
        return `${super.status()}`
    }
}

Object.setPrototypeOf(volkswage, carro) 
Object.setPrototypeOf(fiat, carro)

volkswage.maisAceleracao(160)
console.log(volkswage.status())

fiat.maisAceleracao(80)
console.log(fiat.status())