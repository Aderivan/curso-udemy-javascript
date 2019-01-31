const valores = [7.2, 9.5, 4.8, 9.9];

console.log(valores);

valores[4] = 10;

// O length serve para para informar a quantidade de arrays.  
console.log(valores.length);

// Por ser fracamente tipado, consigo colocar qualquer tipo depois
// o push serve para adicionar um novo array
valores.push({id: 3}, null, 'teste', 10, false);

console.log(valores);

// Tira o último valor da array
console.log(valores.pop());

//Serve no contexto de um objeto para retirar o valor. 
delete valores[0];
console.log(valores);