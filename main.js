maxFall=a=>+(Math.max(...a.map((e,i,v)=>e-Math.min(...v.slice(i+1))))).toFixed(4)

console.log(maxFall([50, 20, 10, 1, 60, 20, 25]))