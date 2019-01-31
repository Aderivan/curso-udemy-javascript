const carro = {
    modelo: 'A4',
    ano: 2018,
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 29,
        endereco: {
            rua: 'Nossa senhora de lourdes',
            numero: 900,
            bairro: 'Timbi',
        }
    },

    condutores: [{
        nome: 'junior',
        idade: 19
    },
    {
        nome: 'Amanda',
        idade: 25
    }],

    calcularValorDoSeguro: function () {
        //código aqui
    }
}

    carro.proprietario.endereco.numero = 900;
    carro['proprietario']['endereco']['rua'] = 'Av. Belmirio Correia';

    console.log(carro)

    delete carro.condutores
    console.log(carro)