function area(altura, largura) {
    const area = altura * largura
    if(area >= 20){
        console.log(`Área maior que o permitido ${area}m²`);
    }else {
        return area;
    }
}

console.log(area(2, 3));
console.log(area(2));
console.log(area());
console.log(area(2 , 5, 17, 54, 65)); //Aqui ele pega os dois primeiros parâmetros e rejeita o restante
console.log(area(5,5));