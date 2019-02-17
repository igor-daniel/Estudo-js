function imprimirnomegritado(obj) { 
    try {  //Tratando possível erro.
    console.log(obj.nome.toUpperCase() + "..." )
    } catch (e) {
        tratarerro(e) //Chamando função.
    } finally {
        console.log("Fim.")   //colocando uma mensagem no fim
    }
}
const obj = {name: "Camila"}
imprimirnomegritado(obj)


function tratarerro(erro) {
    // throw new Error("fudeu")
    // throw 500
    throw "mensagem"
}