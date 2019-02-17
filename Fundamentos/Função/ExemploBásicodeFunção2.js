//Armazenando uma função na variável.
let imprimirSoma = function (a, b) {
    console.log(a + b)
} 
imprimirSoma(4, 5)

//Armazenando uma função arrow em uma variável.

let subtração = (x, y) => {
    return(x - y)
}
console.log(subtração(8, 9))

// return implícito. Mesmo exemplo de cima, mas em uma forma mais compacta.

let menos = (x, y) => x - y  
console.log(menos(5, 10))