 function pessoa() {
     this.idade = 0
    
     setInterval(function() {
           this.idade++
           console.log(this.idade)
        
    }.bind(this), 1000)  //Possível solução é inclementar o .bind(this)
   }
   new pessoa  

//Exemplo acima dando NaN.
//Veja abaixo solução mais simples.

function pessoa2() {
    this.idade = 0
    const self = this //Solução mais simples. Atribuir this a uma variável. Ao fazer isso o this não vai variar mais.
    
    setInterval(function() {
        self.idade++
        console.log(self.idade) 
    },1000)
}
new pessoa2