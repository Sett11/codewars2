function sumFibs(n,a=[0,1,1]){
  while(a.length<=n)a.push(a[a.length-1]+a[a.length-2])
  return a.reduce((a,c)=>a+=(c%2===0)?c:0,0)
}

console.log(sumFibs(10))