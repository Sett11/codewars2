sortCards=a=>a.map(e=>+e===+e?[e,e]:e==='A'?[e,-1]:e==='T'?[e,10]:e==='J'?[e,11]:e==='Q'?[e,12]:[e,13]).sort((a,b)=>a[1]-b[1]).map(e=>e[0])

console.log(sortCards([3,9,"A",5,"T",8,2,4,"Q",7,"J",6,"K"]))