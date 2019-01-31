// Cadeia de protótitos (prototype chain)

// Object.prototype.attr0 = '0'

// const avo = {attr1: 'A'}

// const pai = { __proto__:avo, attr2: 'B'}

// const filho = {__proto__:pai, attr3: 'C'}

// console.log(filho.attr1)


const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },

    status() {
        return `${this.velAtual}KM/h de ${this.velMaxima}KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 324 
}   

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //primeiro passo o objeto e ao lado o prototype dele (o pai, nesse caso)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100);
console.log(volvo.status())

ferrari.acelerarMais(300);
console.log(ferrari.status())