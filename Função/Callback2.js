// Sem CallBack.
const notas = [7.1, 6.4, 4.9, 3.5, 8.3, 9.0]
const notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }   
}
console.log(notasBaixas)

//Com CallBack.

const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})
console.log(notasBaixas2)

//Mesma coisa de cima só que usando Arrow Function.
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)