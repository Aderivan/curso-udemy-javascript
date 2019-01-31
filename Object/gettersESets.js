const sequencia = {
    _valor: 1, //convencao
    get valor() {
        return this._valor++
    },

    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)


// Como o valor de 900 é menor que o valor acima definido
//  (1000) ele não segue, pega o último valor maior e adiciona ++
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)