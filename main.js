transform=s=>Object.entries([...s].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).map(e=>e[1]>1?e[0]+e[1]:e[0]).join``

console.log(transform('economics'))