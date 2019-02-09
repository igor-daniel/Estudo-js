//Variável usando let, tem escopo global, de função e de bloco.
let numero = 1
{
    let numero = 2  // Não sobreescreveu a variável de cima pois let, fica visível apenas dentro desse bloco. 
    console.log('Dentro =' + numero)
}
console.log('Fora =' + numero)
