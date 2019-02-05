const pessoa1 = {
    nome: "José",
    sobrenome: "Silva",
    peso:  90
} //Jeito literal de criar um objeto.

const pessoa2 = {}  //Outro jeito de criar um objeto é: criar um objeto vazio e ir adicionado elementos.
pessoa2.neme = "Maria"
pessoa2.peso = 60.6 //Atribuindo coisas ao objeto.
pessoa2 ["Quantos filhos?"] = 5
pessoa2 ["Estado civíl"] = "Casada"

pessoa1 ["acima do peso"] = "sim" //Evitar atributos com espaços.
console.log(pessoa1)
console.log(pessoa2)

/*OBS.:
 *quando valores estão entre chaves {} quer dizer que é um objeto.
 *Pode haver objetos dentro de objetos.
 */