const numero1 = 1.0;
const numero2 = Number('2.0');

// A função isInteger é para saber se o valor é inteiro.

console.log(numero1);
console.log('O número ' + numero1 + ' é um número inteiro? ' 
+Number.isInteger (numero1));

console.log('================');

console.log(numero2);
console.log('O número '+ numero2 + ' é um número inteiro? ' 
+Number.isInteger (numero2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * numero1 + avaliacao2 * numero2;

const media = total / (numero1 + numero2);

// O toFixed(2) representa a quantidade de casas decimais que quero imprimir. 
console.log('a média foi de: ' + media.toFixed(2));

// Retorna um valor string
console.log('a média foi de: ' + media.toString());

// Passa o valor média para binário
console.log('a média foi de: ' + media.toString(2));

