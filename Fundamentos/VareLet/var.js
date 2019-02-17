//Variável usando var, tem escopo global e escopo de função.
var numero = 1 
{
    var numero = 2  //Sobrescrever a var de cima.
    console.log('Dentro =' + numero )
}
console.log('Fora =' + numero)
