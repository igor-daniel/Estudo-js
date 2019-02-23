//Teste 1.
const alunos = ["Aline", "Adilma", "Bianca", "Eduarda", "Jhonatan", "Davi"]

function falaralunos(alunos, indice) {
    console.log(`${indice + 1}) ${alunos}`)
}

alunos.forEach(falaralunos)

//Teste 2.
console.log("  ")

const listadecompra = ["Arroz", "Feijão", "Açúcar", "Farinha", "Café", "Leite"]

function imprimirlista(componentes, indice) {
    console.log(`${indice +1}) ${componentes}`)
}
listadecompra.forEach(imprimirlista)