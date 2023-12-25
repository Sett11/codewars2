arrayDiffVeryFast=(a,b,c=new Set(b))=>a.filter(e=>!c.has(e))

console.log(arrayDiffVeryFast([1,2,2,2,3,5,5,1,2,4,5,1],[2,1,5]))