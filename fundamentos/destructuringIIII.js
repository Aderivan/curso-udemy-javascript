function rand([min = 0, max= 1000]){
    if(min > max)[min, max] = [max, min];

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log('Passando os dois parâmetros: '.concat(rand([50,40])));
console.log('Passando apenas o primeiro parâmetro e deixando o segundo trazendo do params: '
.concat(rand([50])));
console.log('Passando apenas o segundo parâmetro e deixando o primeiro como 0: '.concat(rand([, 10])));
console.log('Deixando o parâmetro default: '.concat(rand([])));
