shuffle=a=>a.map(e=>[e,Math.random()*a.length]).sort((a,b)=>a[1]-b[1]).map(e=>e[0])


console.log(shuffle([1,2,3,4]))