const diffBig2=(a,f=a=>a.splice(a.indexOf(Math.max(...a)),1)[0])=>f(a)-f(a)

console.log(diffBig2([8,3,1]))