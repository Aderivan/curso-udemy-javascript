const nome = 'rebeca';

const contatecacao = 'olá ' + nome + '!';

const template = `olá
${nome}!`;

console.log(contatecacao);
console.log(template);

const up = texto => texto.toUpperCase();

console.log(`Ei...${up('cuidado')}!`);