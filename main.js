const radBadHash=s=>{
  s=s.slice(0,32)
  while(s.length<32)s+='a'
  return [...s].map(e=>[(e).charCodeAt()+'']).sort((a,b)=>b[0].localeCompare(a[0])).map((e,i)=>((+e+i)%16).toString(16)).join``.toUpperCase()
}

console.log(radBadHash('apple juice'))