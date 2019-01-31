// funcao sem retorno

function imprimirSoma(valor1, valor2){
    console.log(valor1 + valor2);
}

imprimirSoma(2,3);

// Por ser fracamente tipada, o javascript retorna o resultado de not a number.
imprimirSoma(2);

// Abaixo, ele soma os dois primeiros valores, por serem a entrada da função e o resto ignora.
imprimirSoma(2, 3, 4, 5);

// funcao com retorno

function soma(a,b = 1){
    return a + b;
}

console.log(soma(2,3));

console.log(soma(2));
