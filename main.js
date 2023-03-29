flattenTwoLevels=(a,f=x=>x.every(e=>!Array.isArray(e))?x:f(x.flat()))=>a.map(e=>Array.isArray(e)?f(e):e)


console.log(flattenTwoLevels([1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18]))