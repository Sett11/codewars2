let addBinary = function(a, b) {
    let sum = a + b
    let bin = (sum % 2).toString()
    for(; sum > 1; ){
        sum = parseInt(sum / 2)
        bin = (sum % 2) + (bin)
    }
    return bin
}
console.log(addBinary(5, 9))
