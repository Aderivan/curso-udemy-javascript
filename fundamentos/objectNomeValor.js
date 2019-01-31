// Nos exemplos abaixo, verificamos que podemos ter variáveis com mesmo nome, porém, em contexto
// diferentes. 
const saudacao = 'Opa';

function exemplo() {
    const saudacao = 'Olaaaaa';
    return saudacao;
}

const cliente = {
    nome: 'José',
    idade: 28,
    logradouro:{
        rua: 'Nossa senhora de lourdes',
        numero: 900
    }
}

console.log(saudacao);
console.log(exemplo());
console.log(cliente);