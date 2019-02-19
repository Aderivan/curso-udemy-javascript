const alunos = [
    {nome: "Amanda", nota: 7.5},
    {nome: "Dan", nota: 8.2},
    {nome: "Andreza", nota: 9.1},
    {nome: "Victória", nota: 8.5}
]

// Imperativa
let total1 = 0;
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual  
const total2 =  alunos.map(getNota).reduce(soma)
const resultado = () => total2 / alunos.length

console.log(resultado())