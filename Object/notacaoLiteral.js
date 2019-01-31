const nomeAttr = 'nota'
const notaAttr = 7.82

const obj1 = {}
obj1[nomeAttr] = notaAttr
console.log(obj1)

const obj2 = {[nomeAttr]: notaAttr}
console.log(obj2)

const obj3 = {
    funcao1: function () {
        //...
    },

    funcao2() {
        
    }
}