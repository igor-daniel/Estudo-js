function soboanoticia (nota){
    if (nota >= 6) {  //Este bloco só será exexutado se esta afirmação for verdade.
        console.log("Parabéns, você foi aprovado com " + nota)
    }
}

soboanoticia(7.2)
soboanoticia(2.8)

function seforverdadeeufalo(valor) {
    if (valor) {
        console.log("É verdade que..." + valor);
    }
}
seforverdadeeufalo(null) //So será executado se o valor for verdade.
seforverdadeeufalo() 
seforverdadeeufalo(25)