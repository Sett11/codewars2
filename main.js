function gcdi(x,y) {
    return b ? gcdi(b, a % b) : Math.abs(a)
}
function lcmu(a, b) {
    return Math.abs(a * b) / gcdi(a,b)
}
function som(a, b) {
    return a + b
}
function maxi(a, b) {
    return Math.max(a,b)
}
function mini(a, b) {
    return Math.min(a,b)
}
function operArray(fct, arr, init) {
    return arr.map(el => {
        init = fct(init, el)
        return init
    })
}
console.log(operArray(maxi, [ 18, 69, 69, 69, 69, 69 ], 18))