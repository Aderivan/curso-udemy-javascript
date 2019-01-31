const numeros = [1,2,3,4,5,6,7,8,9,10];

for(let x in numeros){
    if(x == 5){
        break; //o break age em cima do bloco do for e não do if
    }
    console.log(`x = ${numeros[x]}`);
}

for(let y in numeros){
    if(y == 5){
        continue;
    }
console.log(`y = ${numeros[y]}`);
}

externo:
for(a in numeros){
    for(b in numeros){
        if(a == 2 && b == 3){
            break externo //Assim, ele atende ao bloco mais externo.
        }
        console.log(`Par = ${a}, ${b}`);
    }
}
