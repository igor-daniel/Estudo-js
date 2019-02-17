const resultado = nota => nota >= 5 ? "Aprovado" : "Reprovado"

console.log(resultado(4.3))
console.log(resultado(6.5))


const aprovarcompra = saldo => saldo >= 100 ? "Compra Aprovada." : "Saldo insuficiênte."
console.log(aprovarcompra(200))
console.log(aprovarcompra(20))