rankings=a=>a.map((e,i,v)=>v.slice().sort((a,b)=>b-a).map((u,j)=>e===u?j+1:0).filter(e=>e)[0])

console.log(rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]))