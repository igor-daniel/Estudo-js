const notas = [5.3, 8.8, 9.1, 7.4]

for (let i in notas) { //Acessando atributos em um array.
    console.log(`${i} = ${notas[i]}`)
}


const pessoa = {
    nome: "Ana",
    sobrenome: "silva",
    peso: 66,
    idade: 33,
}

for (let atributos in pessoa) {  //Acessando atributos em um objeto.
    console.log(`${atributos} = ${pessoa[atributos]}`)
}