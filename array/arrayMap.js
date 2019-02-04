 const nums = [2, 4, 6, 8, 10];

 let resultado = nums.map(function(e) {
     return e * 2
 })

 console.log(resultado)

 const soma10 = e => e + 10
 const triplo = e => e * 3
 const paraDinheiro = e =>  `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

 resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

// O MAP pega o Array original e transforma em outro array com outro elemento, mas com mesmo quantidades de elementos.
