function menorNumero(x, y){

    const valor =  Math.min(x, y)
    return Math.floor(valor)
}

console.log(menorNumero(3, 1))



function isEven(x) {
    if(x % 2 == 0){
        x = 'par'
    }else if(x % 2 == 1) {
        x = 'impar'
    }else if(x != 0 && x != 1) {
        x = x - 2;
    }
    return x
}
    console.log(isEven(50))
    console.log(isEven(75))
    console.log(isEven(-1))