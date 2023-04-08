function willFit(a,b){
  const f=x=>x.sort((a,b)=>a-b)
  a=f(a),b=f(b)
  for(let i=0;i<a.length;i++)if(a[i]>b[i]-2)return !1
  return !0
}

console.log(willFit([10, 2, 4], [6, 4, 12]))