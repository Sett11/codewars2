function groupIn10s(...a) {
  let arr=[...a].sort((a,b)=>a-b),res=[]
  for(let i=1;i<=Math.ceil(Math.max(...arr)/10)+1;i++){
    let tmp=arr.filter(e=>e<i*10&&e>=(i-1)*10)
    if(tmp.length)res.push(tmp)
    if(!tmp.length)res.push([])
  }
  res=res.map(e=>!e.length?undefined:e)
  if(!res[res.length-1])res.pop()
  return res
}
console.log(groupIn10s(1,2,3))