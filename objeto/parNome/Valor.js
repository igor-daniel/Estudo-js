const saudacao = "oi"  //Contexto léxico 1. Escopo global.

function exec() {
    const saudacao = "olá"   //Contexto léxico 2. Escopo de função.
    return saudacao   //Se não ouver o return o conceito fica undefined.
}
console.log(exec())

//Objetos são grupos alinhados de pares nome/valor.
const cliente = {
    nome: "Marcos",
    idade: 25,
    peso: 85,
    endereço: {
        rua: "Cesário de Melo",
        Númeto: 13,
    }
}
console.log(saudacao)
console.log(cliente)