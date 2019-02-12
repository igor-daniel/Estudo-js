//Novo recurso do ES2015

const pessoa = {
    nome: "Bia",
    sobrenome: "Santos",
    idade: 22,
    endereco: {
        logradouro: "Rua bonita",
        numero: 100
    }
}

/*O operador Destructuring permite que possamos tirar elementos de um objeto, e logo ao lado adicionarmos esse varlor em uma variável */
const {nome: a, sobrenome: s } = pessoa  //por ultimo e preciso colocar o nome do objeto.
console.log(a, s)


const { endereco: { logradouro, numero }} = pessoa
console.log(logradouro, numero)



const {cep, peso} = pessoa 
console.log(cep, peso) 
/*Mesmo quando pedirmos para imprimir algo que não existe, não da erro apenas imprime undefined*/