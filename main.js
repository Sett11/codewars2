solution=(f,s)=>f.map((e,i)=>Math.abs(e-s[i])**2).reduce((a,c)=>a+c,0)/f.length

console.log(solution([10,20,10,2],[10,25,5,-2]))