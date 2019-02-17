//Forma de gerar um número entre 0 e 1000.
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min  
    return Math.floor(valor)
}
const obj = {min: 200, max: 500} 
console.log(rand(obj))  //Imprimindo a função com o obj de parámetro.
console.log(rand({min: 800}))  //Definindo um valor mínimo.
console.log(rand({}))