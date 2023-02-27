function alignRight(t,w){
  if(t.length<w)return ' '.repeat(w-t.length)+t
  let res=[],arr=[],c=0
  for(let i=0;i<t.length;i++){
    if(t[i]===' ')arr.push(i+1)
    if(i>=w){res.push(t.slice(0,arr[arr.length-1]));t=t.slice(arr[arr.length-1]),i=0}
    if(t.length<=w)break
  }res.push(t);res.forEach(e=>c=Math.max(c,e.trim().length))
  return res.map(e=>e.trim()).map(e=>' '.repeat(c-e.length<1?0:c-e.length)+e).join('\n')
}
console.log(alignRight("Two lines, I am",10))