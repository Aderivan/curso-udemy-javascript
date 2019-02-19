// Arow Function
const soma = (a,b) => a + b
console.log(soma(27,2))

const nome = digiteSeuNome => digiteSeuNome
console.log(nome("José"))

const sobreNome = digiteSeuSobreNome => {
    return digiteSeuSobreNome
}
console.log(sobreNome("Araújo"))

// Arrow Function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
// com a função Arrow, não é possível modificar o this

// Parâmetro Default

function log(texto = "Node") {
    console.log(texto)
}
log()
log(undefined)
log(null)
log('sou mais forte')

// operador Rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4,5,6,7,8,9))