// rest (juntar)
const total = function (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total;
}

console.log(total(2,3,4,5))

// Spread (espalhar) com objeto

const funcionario = {
    nome: 'Maria',
    salario: 2500.00
}

const clone = {
    ativo: true, ...funcionario
}

console.log(clone)

// Usar spread com array

const grupoA = ['João', 'Maria', 'Glória']
const grupoFinal = ['José', ...grupoA, 'Amanda']
console.log(grupoFinal)

