function soma () {
    let soma = 0;
    for(i in arguments){
        soma += arguments[i]
    }

    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(2, 1.6, 5.4, 2.8));
console.log(soma('a', 'b', 'c'));

// O arguments é um array interno da função
// No momento que ele é passado, encontra-se vazio, e posso pegar todas as variáveis que foram
// passadas na função e retornar o valor.