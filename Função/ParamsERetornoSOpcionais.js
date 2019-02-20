//Não é o melhor exemplo pra ser usado.

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`A área é de ${area}m2.`)
    } else{
        return area 
    }
}
console.log(area(2, 3))
console.log(area(5, 5))