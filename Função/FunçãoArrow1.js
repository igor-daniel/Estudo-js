// Funçaõ arrow tem um this associado ao contexto de escrita.
let dobro = function(a) {
    return 2 * a
}
console.log(`1) ${dobro(5)}`)

dobro = (a) => {
    return 2 * a 
}
console.log(`2) ${dobro(2)}`)

dobro = () => "Hello" //Função pode ser criada sem o corpo se ouver apenas uma linha.

console.log(`3) ${dobro()}`)