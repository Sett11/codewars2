function solve(s){
  const res=Object.values([...s].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b-a)
  if(res.length===2&&res[0]-res[1]>1&&res[1]!==1)return false
  if(res.every(e=>e===1)||res.length===2&&res.includes(1))return true
  for(let i=0;i<res.length;i++){
    res[i]-=1
    if(res.every((e,i,v)=>e===v[0]))return true
    res[i]+=1
  }
  if([...new Set(res)].length===res.length)return false
  if(res.includes(1)&&res.filter(e=>e!==1).length!==1)return true
  return false
 }

 console.log(solve('aabbccddd'))
 console.log(solve('cdefghijklmnopqrstuvwx'))
 console.log(solve('xzgxxgzg'))