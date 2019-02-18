Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log("Exelente você está aprovado!")
    } else if(nota.entre(6, 8.99)) {
        console.log('Apenas aprovado :)')
    } else if (nota.entre(4, 5.99)) {
        console.log('Recuperação.')
    } else if (nota.entre(0, 3.99)) {
        console.log("Que fracasso você está reprovado!")
    } else {
        console.log("Nota inválida.")
    }
}

imprimirResultado(11)
imprimirResultado(9.5)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(-1)