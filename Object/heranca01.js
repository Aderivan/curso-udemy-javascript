const ferrari = {
    modelo: 'F40',
    velMaxima: 340
}

const volvo = {
    modelo: 'V40',
    velMaxima: 350
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)