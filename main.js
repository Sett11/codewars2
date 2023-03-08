findOutlier=(a,b=a.filter(e=>e%2===0))=>b.length===1?b[0]:a.filter(e=>e%2!==0)[0]

console.log(findOutlier([0,1,2]))