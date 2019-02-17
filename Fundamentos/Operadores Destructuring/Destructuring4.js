function rand([min = 0, max = 1000]) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([]))
console.log(rand([, 10])) //Definindo o valor máximo.
console.log(rand([900])) //Definindo apenas o valor mínimo.
