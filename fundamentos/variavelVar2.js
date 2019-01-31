var numero = 1;
{
    var numero = 2;
    console.log('dentro ' + numero);
}

console.log('fora ' + numero);

// Tirando o bloco de function, todo o var se torna global, mesmo dentro de um bloco. 
// Sendo assim, quando declaro variáveis com o mesmo nome e atribuo valores diferentes para eles
// o valor é sobrescrito e o retorno é o último