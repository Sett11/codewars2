let greet = function(name) {
const first = name.charAt(0).toUpperCase()
const rest = name.slice(1).toLowerCase()
const result = first + rest
    return `Hello ${result}!`
}
console.log(greet("JACK" ))