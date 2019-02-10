console.log("a = " + a)  //Aqui ocorre o Hoisting, que é elevar a variável.
var a = 5
console.log("a = " + a) 

console.log(" ")

//Com o Hoisting, é assim que a maquina lê o código.
var a
console.log("a = " + a) 
a = 5
console.log("a = " + a) 


console.log(" ")


//Não é possivel usar o Hoisting com o let.

console.log("x = " + x)
// let x = 4
console.log("x = " + x)

