function getInteiroAleatorioEntre (min, max) {
    
    const result = Math.random() * (max - min) + min;
    return Math.floor(result);
}
    let opcao = 0;


do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);

} while(opcao != -1)

console.log('até a próxima!!!')