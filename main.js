equalize=(a,c=a[0])=>a.map(e=>e-c===0?'+0':e-c>0?`+${e-c}`:`${e-c}`)

console.log(equalize([20,30,35,10]))