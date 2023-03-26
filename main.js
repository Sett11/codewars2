solve=a=>a.filter((e,i,v)=>!v.includes(-e))[0]

console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]))
console.log(solve([1,-1,2,-2,3]))