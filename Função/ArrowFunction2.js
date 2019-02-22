function pessoa() {
    this.idade = 0
    setInterval( () => {   //Vantagem de usar arrow function, é que o this não varia.
        this.idade++ 
        console.log(this.idade)
    }, 1000)
}
new pessoa