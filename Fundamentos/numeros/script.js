const peso1 = 1.0 //se deseja adicionar um tipo número inteiro, basta adicionar .0 ao final.
console.log(peso1);
console.log(typeof peso1)

const peso2 =  Number(2.0) // Ou usar a função Number para adicionar numeros. 
console.log(peso2)
console.log(typeof peso2); // Usado para mostrar no console o tipo.

//como fazer a média

let prova1 = 9.56214 //let é um tipo de var. Há diferença entre eles. É recomendado que use let ao inves de var
let prova2 = 5.46565
let prova3 = 2.54841

let total = prova1 * peso1 + prova2 * peso1 + prova3 * peso2 //soma dos valores. 
let media = total / (peso1 + peso2) //dividido pela quantidade de valores.

console.log(media);
console.log(media.toFixed(2)) //O "toFixed(2)" é usado quando se quer apenas 2 casas decimais.
console.log(media.toString(2)) // E o "toString(2)" é para tranformar o valor em número binário.

console.log(Number.isInteger(media)) //"Number.isInteger()" é usado quando de ser saber se é um número inteiro