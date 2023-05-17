const locate=(a,v)=>{
  const f=x=>x.reduce((a,c)=>a.concat(Array.isArray(c)?f(c):[c]),[])
  return f(a).includes(v)
}