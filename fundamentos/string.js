const escola = "Cod3r";
// Abaixo ele resultará na letra que se encontra na posição passado pelo parâmetro
console.log(escola.charAt(4));

// Abaixo ele terá o retorno de um unicode.
console.log(escola.charCodeAt(3));

// Abaixo eu trago a letra que se encontra na posição 3
console.log(escola.indexOf(3));

// Ele traz o resultado a partir do índice que eu passar no parâmetro.
console.log(escola.substring(1));

// Abaixo, ele vai do índice 0 até o índice 3.(mas não imprime o 3)
console.log(escola.substring(0, 3));

// serve para concatenar palavras
console.log('Escola ' .concat(escola).concat("!"));

// No primeiro parâmetro, informo a letra da palavra e no segundo, a letra que quero substituir.
console.log(escola.replace(3, 'e'));

// Passei o string para array e como parâmetro, informo o separador.
console.log('dan, andreza, vivi'.split(','));
