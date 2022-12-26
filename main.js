function closeCompare(a, b, m = 0){ 
 return m >= Math.abs(a-b) ? 0 : a < b ? -1 : a > b ? 1: null
}
console.log(closeCompare(4,5))