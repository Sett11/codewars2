const intSumSq=(n,m)=>{
  const res=Array(n-1).fill(1).map((e,i)=>e=i+1).filter(e=>[...(e+'')].map(Number).reduce((a,c)=>a+c,0)**2===m)
  return res.length!==0?res:'No result'
}

console.log(intSumSq(2,4))