//Função anônima = função sem nome.

const soma = function (x, y) {
    return x + y 
}

const imprimirSoma = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirSoma(4, 6)
imprimirSoma(4, 6, soma)
imprimirSoma(4, 6, function(x, y){
    return x - y
})

const pessoa = {
    falar: function() {
        console.log("Opa!!")
    }
}
pessoa.falar()