//Função em JS é First-class Object (Citizens)
//Higher-order function

//Criar uma função literal.
function func1() {}

//Criando função em uma variável.
const func2 = function () {}

//Armazenar uma função no array.
const array = [function(a, b) {return a + b}, func1, func2]
console.log(array[0](2, 3)) //Chamando a função e passando os parámetros.

//Armazenando uma função em um atributo de um objeto.
const obj = {}
obj.falar = function() {return "Hello"}
console.log(obj.falar()) 

//Passando uma função como parámetro.
function run(fun){
    fun()
}

run(function () {console.log("Executando...")})

//Uma função pode retornar e conter uma função.
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(8, 4)(5)