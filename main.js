sumItUp=a=>a.map(e=>parseInt(e[0],e[1])).reduce((a,c)=>a+c,0)

console.log(sumItUp([["101",16],["7640",8],["1",9]]))