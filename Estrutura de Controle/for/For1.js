let contador = 1 
while (contador <= 10) {
    console.log(`Loading ${contador}`)
    contador++
}

//Criando o mesmo exemplo de cima, só que com for.

console.log(" ")
//Na estrutura for primeiro tem que ser criada uma variável uma condição, e por ultimo o inclemento.
for (let i = 1; i <= 10; i++) {
    console.log(`Carregando... ${i}`)
}


const notas = [8.74, 9.65, 2.36, 6.54, 7.45]
for (let i = 0; i < notas.length; i++){
    console.log(`Notas do bimestre... ${notas[i]}`)
}