var buz = {
    fog: 'stack'
};

for (var nome in buz) {
    if (buz.hasOwnProperty(nome)) {
        alert("this is fog (" + nome + ") for sure. Value: " + buz[name]);
    }
    else {
        alert(name); // toString ou qualquer outra coisa
    }
}
