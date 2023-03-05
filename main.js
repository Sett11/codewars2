clean=a=>a.filter(e=>true)

console.log(clean([1, 2, , , 3, 4,]))
console.log(clean([undefined,,,, null,, NaN,, false, '', 4, 3, 2, 1, 0]))