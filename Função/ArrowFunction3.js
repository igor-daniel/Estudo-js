let ComparaComThis = function(param) {
    console.log(this === param)
}

ComparaComThis(this) 

const obj = {}
ComparaComThis = ComparaComThis.bind(obj)
ComparaComThis(global)
ComparaComThis(obj)

let ComparaComArrow = param => console.log(this === param)

ComparaComArrow(this)
ComparaComArrow(global)

ComparaComArrow = ComparaComArrow.bind(obj)
ComparaComArrow(obj)