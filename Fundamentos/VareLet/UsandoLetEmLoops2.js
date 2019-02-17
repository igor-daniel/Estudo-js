const funcs = []

for (let x = 0; x < 10; x++) {
    funcs.push(function(){
        console.log(x)
    })
}

funcs[4]() //Resultado 4, pois let tem escopo de bloco.
funcs[9]()