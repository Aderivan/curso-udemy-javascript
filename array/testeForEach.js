Array.prototype.forEach2 = function (callback) {
    for(let i = 0; i < this.length; i++) { //Onde o this é o próprio array
        callback(this[i], i, this) //Callback espera 3 parâmetros: o índice, elemento e o Array
    } 
}

const familia = ['Andreza', 'Victoria', 'Dan', 'Alice']

familia.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})


String.prototype.addTexto = function (texto) {
    return console.log(this + ' ' + texto)
} 
    
var Nome = 'Dan'
Nome.addTexto('Tabacudo')