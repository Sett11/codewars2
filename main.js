function solve(n){
  a=Array(n).fill(1).map((e,i)=>e+i),j=1,r=[]
  r.push(a.shift())
  while(j<a.length){
    r.push(a[0])
    if(j===1)a=a.filter((e,i)=>i%2!==0)
    if(j!==1)a=a.filter((e,i)=>i%j!==0)
    j=a[0]
  }
  return r.concat(a).reduce((a,c)=>a+c,0)
}

console.log(solve(100))