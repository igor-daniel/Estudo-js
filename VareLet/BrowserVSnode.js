let a = 123

global.b = 00 
this.c = 321
this.d = 456
this.e = {e: 554, f: 844, g: true}

console.log(this.a)
console.log(this === module.exports) // É igual a window.
console.log(global.b)
console.log(this)

//Criando uma variável maluca: sem var ou let.
abc = "sim" // Evitar isso.
console.log(global.abc)