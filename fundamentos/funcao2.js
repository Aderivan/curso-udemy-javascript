// armazenando uma função na variável

const imprimirSoma = function (a,b) {
    console.log(a+b);
}

imprimirSoma(2,3);
console.log('------------------------------')
// Armazenando uma função arrow em uma variável

const soma = (a, b) =>{
    return a + b;
}
console.log(soma(2,3));

console.log('------------------------------')

// retorno implícito (serve apenas o function seja em apenas uma linha. | O a-b é o return)
// Caso tenha apenas um parâmetro, não precisa de parênteses. 

const subtracao = (a,b) => a-b;
console.log(subtracao(3,1))