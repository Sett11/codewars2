function repeats(arr){
    let sum = null
    arr.map((el,i,arr) => arr.indexOf(el) === arr.lastIndexOf(el) ? sum += el: null)
    return sum
}
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]))