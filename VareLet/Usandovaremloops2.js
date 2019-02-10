const funcs = []

for (var x = 0; x < 10; x++ ) {
    funcs.push(function() {
        console.log(x)
    }) 
}

funcs[2]()   //resultado 10
funcs[6]()   //resultado 10