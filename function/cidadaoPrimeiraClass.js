// Função em JS é First-Class object

// Criar de forma literal

function fun1() {}

// Armazenar em uma variável

const fun2 = function() {}

// Armazenar em uma array

const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3));

// Armazenar em um atributo objeto

const obj = {}

obj.fala = function () {
    return  'opaaa!!!!'
}

console.log(obj.fala())

// Criar função como parâmetro

function run (fun) {
    fun()
}

run(function() {
    console.log('Executando...')
})

// Uma função pode conter/retornar uma função

function soma(a,b){
    return function (c)
    {
        console.log(a + b + c );
    }
}
soma(2,3)(4)
