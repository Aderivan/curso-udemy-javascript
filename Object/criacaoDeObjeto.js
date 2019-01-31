// funcções construtoras

function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    } 
}

const pd1 = new Produto('Caneta', 7.99, 0.15)
const pd2 = new Produto('Notebook', 1000, 0.10)

console.log(pd1.getPrecoComDesconto(), pd2.getPrecoComDesconto())

//Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return Math.floor((salarioBase / 30) * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('João', 5000, 4);
const f2 = criarFuncionario('José', 6000, 1);

console.log('R$' + f1.getSalario(), 'R$' +f2.getSalario())