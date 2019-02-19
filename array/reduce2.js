const alunos = [
    {nome: 'Andreza', nota: 7.5, bolsista: true},
    {nome: 'Victória', nota: 8.0, bolsista: false},
    {nome: 'Amanda', nota: 9.8, bolsista: true},
    {nome: 'Lorena', nota: 6.8, bolsista: false},
]

// Todos são bolsistas?

const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// algum bolsistas 

const algumBolsistas = (resultado, bolsista) => resultado || bolsistas
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))