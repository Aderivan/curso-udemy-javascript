function somar(a,b,c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
// Acima, eu passo um valor padrão de valor 1, caso as variáveis retornem false ou null ou undefined
console.log(somar());
console.log(somar(1));
console.log(somar(1, 3, 5));
// Único problema é que o zero numa variável retorna false, nesse caso, ele cai no ou e traz 1, somando 3. 
console.log(somar(0,0,0));

function somar2 (a,b,c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}

console.log(somar2()); console.log(somar2(1)); console.log(somar2(1, 3, 5)); console.log(somar2(0,0,0));

function somar3 (a=1,b=1,c=1){
    return a + b + c;
}

console.log(somar3()), console.log(somar3(1)), console.log(somar3(1, 3, 5)), console.log(somar3(0,0,0))