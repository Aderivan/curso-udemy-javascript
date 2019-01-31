let comparaThis = function (params)  {
    console.log(this === params)
}

comparaThis(global)

const obj = {}
comparaThis = comparaThis.bind(obj)

comparaThis(global)
comparaThis(obj)

let comparaThisArrow = params => console.log(this === params)

comparaThisArrow(global)
comparaThisArrow(module.exports)

comparaThisArrow = comparaThisArrow.bind(obj)

comparaThisArrow(obj)
comparaThisArrow(module.exports)
