const [a] = [10]  //Forma de desestruturar um array.
console.log(a)

const [n1, , n3, , n5, n6 = 2] = [10, 5, 8, 7]  //aplicando o destructuring.
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,5 ,3], [5, 4, 6]]  //Não é recomendado usar códigos assim pois é de difícil leitura.
console.log(nota)

/*
const [nome da variável] = [atribuir valor]
*/