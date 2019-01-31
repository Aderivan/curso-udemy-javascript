// Transformando o object em JSON
const obj = {
    a:1,
    b:2,
    c:3,
    soma() {
        return a+ b + c
    }
}

console.log(JSON.stringify(obj))

// Transformando o JSON em object

console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
