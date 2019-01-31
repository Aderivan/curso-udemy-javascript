console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
} 

console.log('araujo'.reverse())

// reverse = reverte a string (por padrão, não tem na API, mas consegue acessar através do propotype)
// split = quebra a string em cada letra, gerando arrays, com todas as letras do string, inclusive espaço em branco
// join = junta novamente todos os arrays

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5,6].first())