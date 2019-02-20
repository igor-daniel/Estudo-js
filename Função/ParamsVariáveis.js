//Passando uma função sem parámetros.
function soma() { 
    let soma = 0  
    for (i in arguments) {
        soma += arguments[i]  //Adicionado o valor de soma no array.
    } 
    return soma
}

console.log(soma())  //É possível adicionar parámetros depois de criar a function.
console.log(soma(5, 5.6, 4.3))
console.log(soma(8.5, 6.1, 'teste.')) // Ao colocar string ele irá concatenar.