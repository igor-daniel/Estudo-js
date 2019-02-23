//Um exemplo de Callback.

const fabricantes = ["Mercedes", "Ferrari", "BMW", "Ford"]

function imprimir(marca, indice) {
    console.log(`${indice +1}) ${marca}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricantes){
    console.log(fabricantes)
})