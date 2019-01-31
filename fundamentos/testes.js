var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

/* 
 * O método hasOwnProperty() retorna um booleano indicando se o objeto possui a 
 * propriedade especificada como uma propriedade definida no próprio objeto em questão 
 * (ao contrário de uma propriedade herdada).
 */

function mostrarProps(obj, nomeDoObj) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
      }
    }
    return resultado;
  }

  console.log(mostrarProps(meuCarro, 'meuCarro'))