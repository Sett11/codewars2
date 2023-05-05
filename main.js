sc=(a,f=x=>x.reduce((a,c)=>a.concat(Array.isArray(c)?f(c):[c]),[]),r=x=>Object.entries(x.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]).filter((e,i,v)=>e[1]==v[0][1]).map(e=>+e[0]),z=r(f(a)))=>a.map(e=>e.filter(u=>!z.includes(u)))

console.log(sc([[3,4,4,5],[3,4,4,5],[3,4,4,5],[3,4,4,5]]))