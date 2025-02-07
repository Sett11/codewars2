maxMin=(a,b)=>[(r=a.map((e,i)=>Math.abs(e-b[i])).sort((q,w)=>q-w))[r.length-1],r[0]]

console.log(maxMin([1,3,5],[9,8,7]))
console.log(maxMin([10,20,30,40],[111,11,1,-111]))