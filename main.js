checkRange=(a,x,y,c=0)=>a.map(e=>c+=e<x==e>y)|c

console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7))
console.log('checkRange=(a,x,y,c=0)=>a.map(e=>c+=e<x===e>y)|c'.length)