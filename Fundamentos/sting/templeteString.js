const nome = "Maria "
const concatenação = "olá " + nome + "!!!"
console.log(concatenação)

const templete = `Olá    
${nome} !!!`
console.log(templete) 

const soma = `1 + 1 = ${1 + 1}`
console.log(soma)

const maiuscula = texto => texto.toUpperCase() //funçao usada pra deixar a letra maiúscula.
console.log(`Ei ... ${maiuscula("cuidado")}`)

/* O templete string é sempre usado entre crazes `` .
 * É uma forma diferente de convatenar.
 * Ele sempre respeita os espaços e as quebras de linha, diferente da concatenação comum.
 * sempre que desejar usar uma função ou realizar uma soma é necessario usar ${} .
*/