const obj1 = {}
obj1.nome = "Cachorro" //Neste caso está sendo atribuído nome ao objeto.

// obj1["nome"] = "Cachorro"  mesma coisa do exemplo acima mas escrito de uma forma diferente.

function Obj(nome) {
    this.nome = nome  //Tornando-o público.
    this.exec = function() {
        console.log("execccc")
    }
}

const Obj2 = new Obj("mesa")
const Obj3 = new Obj("cadeira")
console.log(Obj3.nome)
console.log(Obj2.nome)
Obj3.exec()