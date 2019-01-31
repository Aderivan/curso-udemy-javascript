console.log(Math.ceil(6.1)); //arredonda pra cima (ceil)

const objet1 = {}
    objet1.nome = 'José'
    // objet1['nome'] = 'José' <= apenas como exemplo.
    console.log(objet1.nome);

function obj(nome) {
    this.nome = nome //tornarei o 'nome' público usando o this
    this.exec = function () {
        console.log('exec...')
    }
}

const obj2 = new obj('cadeira');
const obj3 = new obj ('mesa');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();