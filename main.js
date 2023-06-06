pascalsTriangle=x=(d,a=[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]],f=x=>x.flat())=>{
  if(d<a.length)return f(a.slice(0,d))
  if(a.length===d)return f(a)
  let t=[1]
  for(let i=-1;++i<a[a.length-1].length;)t.push((a[a.length-1][i]+a[a.length-1][i+1])||1)
  a.push(t)
  return x(d,a,f)
}

console.log(pascalsTriangle(4))