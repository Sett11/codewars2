normIndex=(a,g)=>g>=0?a[g%a.length]:a.slice().reverse()[Math.abs(g)%a.length-1]||a[0]

console.log(normIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],-16))