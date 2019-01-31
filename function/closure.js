// Clousere é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externa à função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())


function init(){
    var name = 'José'

    function displayName(){
        console.log(name)
        
    }

    displayName()
}

init()

function makeFunc(){
    const name = 'José Dan'
    
    function displayNewName(){
        console.log(name)
    }

    return displayNewName
}

var myFunc = makeFunc();
myFunc();