const alunos = [
    {nome: 'Andreza', nota: 7.5, bolsista: true},
    {nome: 'Victória', nota: 8.0, bolsista: false},
    {nome: 'Amanda', nota: 9.8, bolsista: true},
    {nome: 'Lorena', nota: 6.8, bolsista: false},
]

console.log(alunos.map(a  => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
    
})

console.log(resultado)