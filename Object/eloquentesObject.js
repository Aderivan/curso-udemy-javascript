const empyt = {};
console.log(empyt.toString)
console.log(empyt.toString())

// O prototype de um objeto vazio é o ancestral de todos os prototypes: Object.prototype

console.log(Object.getPrototypeOf({}) === Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype))

// A função Object.getPrototypeOf retorna o prototype de um objeto como o esperado.

var coelho = {
    falar: function (linha) {
        console.log(`O coelho ${this.tipo} fala ${linha} "'"`)
    }
}

var coelhoAssasino =   Object.create(coelho)

coelhoAssasino.tipo = "Assassino";
coelhoAssasino.falar("Skreeeee!!!");


Coelho.prototype.falar = function(linha) {
    console.log(`O coelho ${this.tipo} fala ${linha}`)
}

function Coelho(tipo) {
    this.tipo = tipo
}

var coelhoAssasino = new Coelho("assassino")
var coelhoPreto = new Coelho("preto")

coelhoAssasino.falar("dommmm")
console.log(coelhoPreto.tipo)


