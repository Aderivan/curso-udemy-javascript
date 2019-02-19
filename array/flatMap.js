const escola = [{
    turma: 'Turma M1',
    alunos: [{
        nome: 'Andreza',
        nota: 7.5
    }, {
        nome: 'José',
        nota: 9.1
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Amanda',
        nota: 9.7
    }, {
        nome: 'Victória',
        nota: 6.1
    }]

}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasTurma)
console.log(notas1)

//flatMap serve para axatar duas arrays numa só
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)