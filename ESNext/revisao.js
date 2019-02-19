// let e const

{
    var a = 2
    let b = 3
}

console.log(a)
// console.log(b)
// Assim, o var tem escopo global é acessado, enquanto o let, que tem escopo de bloco, não é acessado

// Template String

const prod = 'ipad'
console.log(`${prod} é caro!`)

// Destructuring

const [l,e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1,2]
console.log(x,y)

const {idade, nome} = {nome: 'José', idade: 29}
console.log(idade, nome)