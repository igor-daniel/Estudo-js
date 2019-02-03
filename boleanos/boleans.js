let isativo = true 

console.log("Os verdadeiros")
console.log(!!" ")
console.log(!!"texto")
console.log(!!{})
console.log(!![])
console.log(!!Infinity)


console.log("Os falsos...")
console.log(!!null)
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false))  //se atribuir falso a uma variável ela se torna falsa

console.log("Pra finalizar...")
console.log(!! ("" || 0 || null))

console.log("Exemplo prático disso")
let nome = ""
console.log(nome || "Desconhecido")  // A variável for falsa ele vai imprimir desconhecido 

/*boleno (verdadeiro ou falso).
 *!! é usado para dizar se algo é verdadeiro ou falso.
 *|| é igual a ou 
 */