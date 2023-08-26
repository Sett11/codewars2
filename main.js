twins=a=>a.every(e=>a.filter(u=>e==u).length==2)

console.log(twins([1,2,3,1,2,3]))