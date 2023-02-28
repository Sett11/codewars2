validateWord=s=>Object.values([...s.toLowerCase()].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).every((e,i,a)=>e==a[0])

console.log(validateWord('ababab'))