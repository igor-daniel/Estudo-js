let n1 = 1
let n2 = 2 

n1++  //É usado para adicionar mais um.
console.log(n1)

--n2 //É usado para subtrais um. Quando o operador unário é usado a frente ele tem preferencia de leitura.
console.log(n2)

console.log(++n1 === n2--)
console.log(++n1 == n2--)