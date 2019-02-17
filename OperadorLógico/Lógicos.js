function compras(trabalho1, trabalho2) {
    const comprarsorvete = trabalho1 || trabalho2
    const comprartv50 = trabalho1 && trabalho2
    const comprartv32 = trabalho1 !=  trabalho2  //Se um for diferente do outro.
    const mantersaldavel = !comprarsorvete  //Se o comprar sorveter for false.

    return {comprarsorvete, comprartv50, comprartv32, mantersaldavel}
}

console.log(compras(true, true))
console.log(compras(true, false))

/*
operador tipo e = && .  As duas afirmações têm que ser verdadeiras.
v e v = v
f e v = f
v e f = f

operador tipo ou = ||

v e f = v
f e v = v
f e f = f
*/