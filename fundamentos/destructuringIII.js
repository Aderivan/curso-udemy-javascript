function rand({min = 0, max = 1000} = {}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor); 
    //o floor retorna o menor número inteiro dentre o parâmetro passado.
    // ex: 19.45 = 19
}
const obj = {
    max: 50,
    min: 40
} 

//as formas de passar os valores
console.log(rand(obj)) 
console.log(rand({min: 995}))
console.log(rand({}))

//- assim apresenta um erro informando que o parâmetro se encontra null ou undefined
// ps: no parâmetro da func eu pedi para retornar vazio caso não passe um parâmetro
console.log(rand())
