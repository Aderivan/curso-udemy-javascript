const pessoa = {
    saudacao: 'Boa noite!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar;
falar();

// Conflito entre o paradigmas: funcionao e OO.
// Caso eu tivesse passado a const pessoa(no console.log), ele teria acessado o saudacao.


// O método bind resolverá o this. 
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();


function pessoas (){
    console.log(this.nome, this.Altura);
}

informacoesDaspessoas = {
    nome: 'José Aderivan',
    Altura: 1.84
}

let dadosDaPessoa = pessoas.bind(informacoesDaspessoas);
dadosDaPessoa();