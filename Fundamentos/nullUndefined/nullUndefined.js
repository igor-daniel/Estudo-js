let valor  // Não atrubuído valor, por tanto é undefinede.
console.log(valor)

valor = null  // Ausência de valor
console.log(valor)
// console.log(valor.toString())  //Erro! pois o valor está null


const produto = {}
console.log(produto.preço) //Não da erro mas é da undefined.
console.log(produto)

produto.preço = 5.50
console.log(produto)

produto.preço = undefined  // Evitar este tipo de atribuição.
console.log(!!produto.preço)

produto.preço = null //Sem preço.
console.log(produto)
