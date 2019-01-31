const data1 = new Date(0)
const data2 = new Date(0)
console.log('01) ', data1.getDate() === data2.getDate())
console.log('02) ', data1.getDate() == data2.getDate())

// Abaixo, o resultado de ambos vai ser falso por não estarei na mesma locação de memória.
console.log('03) ', data1 === data2)
console.log('04) ', data1 == data2)

console.log('05) ', undefined === null)
console.log('06) ', undefined == null)
