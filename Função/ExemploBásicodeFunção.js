//Função sem retorno.
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(8, 6) //Neste caso é possível imprimir a função sem o console.log pois é uma função sem retorno


//Função com retorno.

function adição(a, b = 1) /*Aqui estou atribuíndo b = 1 como padão. */ {
    return (a + b)
}

console.log(adição(8)) //Neste caso é preciso usar o console.log para imprimir, pois esta função tem retorno.
console.log(adição(5, 3))

