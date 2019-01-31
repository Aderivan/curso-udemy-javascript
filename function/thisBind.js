function pessoa() {
    this.idade = 0

    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new pessoa;

// Uma opção de driblar o this 

function outraPessoa() {
    this.idade = 0
    const self = this
    
    setInterval(function(){
        self.idade++;
        console.log(`Essa é uma outra pessoa: ${self.idade}`);
    },1000)
}

new outraPessoa