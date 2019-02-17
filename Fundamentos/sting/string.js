const qualquer = "script"

console.log(qualquer.charAt(2)) //charAt(2) exibe a letra dois da constate (a primeira letra é 0).
console.log(qualquer.charAt(6)) //Ao pedir a letra 6 ele retorna um resultado vazio pois não ha espaço 6.

console.log(qualquer.substring(1)) //aqui ele escreve a constante partindo do 1.
console.log(qualquer.substring(0)) //Aqui aparece a palavra toda.
console.log(qualquer.substring(0, 3)) //este código diz partindo do indice 0 mostre 3 caracteres.



console.log(qualquer.concat(" é").concat(' vida') ); // Este é um jeito de concatenar tipo string.
console.log(qualquer + " é " + "vida " + "novamente.") //outro jeito de concatenar.

console.log("Pedro,Maria,João,Lucia".split(",")) //Este é um jeito de transformar string em array. 