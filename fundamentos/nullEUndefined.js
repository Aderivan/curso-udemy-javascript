let numero1 = 3;
let numero2 = numero1;

numero2++;

console.log(numero2);
console.log(numero1);

console.log('----------------------------')

const a = {name: 'José'};
const b = a;
b.name = 'Dan';

console.log(a);
console.log(b);

/*
* Sendo assim, chegamos a conclusão que o valor de origem  primitivo não é modificado
* enquanto o objetico ele é alterado, pois, o 'a' está na mesma memória que o 'b'.
 */