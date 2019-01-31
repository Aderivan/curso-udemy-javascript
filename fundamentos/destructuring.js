const pessoa = {
    nome: 'Ana',
    idade: 9,
    endereco:{
        logradouro: 'Rua nossa senhora de Lourdes',
        numero: 900
    }
}

// Acessando campos do objeto 

const{nome, idade} = pessoa;

console.log(nome, idade)

const{nome: n, idade: i} = pessoa;
console.log(n,i)

const{sobrenome = null, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);


const{endereco: {logradouro, numero, cep = null}} = pessoa
console.log(logradouro, numero, cep)