parseNumbers=a=>a.map(e=>e>0?Math.floor(+e):Math.ceil(+e))

console.log(parseNumbers(['2.48']))