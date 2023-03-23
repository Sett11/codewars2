arraysSimilar=(a1,a2)=>a1.sort((a,b)=>a-b).every((e,i)=>e===a2.sort((a,b)=>a-b)[i])&&a1.length===a2.length

console.log(arraysSimilar( [1,1,2],[4,3,2,1,1]))