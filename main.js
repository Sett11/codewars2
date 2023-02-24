const countDigit=(n, d, base=10, fromBase=10)=>[...(parseInt(n,fromBase)).toString(base)].filter(e=>e===d).length

console.log(countDigit("1100101110101", "d", 15, 2))
console.log(countDigit("133", "3", 10, 10))