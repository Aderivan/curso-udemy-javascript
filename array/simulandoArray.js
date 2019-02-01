const quaseArray = {
    0: 'Rafael',
    1: 'Dan',
    2: 'Lorena'
}

Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.value(this)
    },
    enumerable: false
})

console.log(quaseArray[0])
