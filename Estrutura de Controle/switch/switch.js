const imprimirResultado = function(nota) {
    switch(Math.floor(nota)){
        case 10: case 9:
        console.log("Muito bem. Está aprovado com " + nota)
        break // ao fim de cada case é preciso colocar um break.
        case 8: case 7:
        console.log("Quase ficou reprovado, mas você passou!")
        break
        case 5: case 6:
        console.log("Está de recuperação!")
        break
        case 0: case 1: case 2: case 3: case 4:
        console.log("Sua inteligência é insuficiênte para passar.")
        break
        default:  //O default é usado quando nenhum case foi usado.
        console.log("Nota inválida.")
    }
}

imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(-2)
imprimirResultado(11)