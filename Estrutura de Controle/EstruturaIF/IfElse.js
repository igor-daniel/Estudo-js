function verificarsepassou(nota){
    if (nota >= 7) {
        console.log("Você foi aprovado com " + nota)
    } else{
        console.log("Você é muito burro " + nota + " não é o suficiênte para passar.")
    }
}
verificarsepassou(8)
verificarsepassou(1)
verificarsepassou("sim") //Tomar cuidado com isso. 