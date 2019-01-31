function tratarErroELancar(erro){
    throw new Error('Ocorreu um erro temporário');
}

function imprimirNome(obj){
    try {
    console.console(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e);
    } finally{
        console.log('Final');
    }   
}
const obj = {
    name: 'Roberto'
}
imprimirNome(obj);