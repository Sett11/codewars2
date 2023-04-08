function splitAndAdd(a,r) {
   if(a.length===1||r===0)return a
   let b=a.slice(0,Math.floor(a.length/2)),c=a.slice(Math.floor(a.length/2))
   while(b.length<c.length)b.unshift(0)
   b=b.map((e,i)=>e+c[i])
   return splitAndAdd(b,r-1)
}

console.log(splitAndAdd([1,2,3,4,5], 2))