const f=(x,y)=>{
  for(let i=-1;++i<y.length;)x[y[i]-1]='\n'
  return x
}
const z=(x,a,b)=>x.join``.split`\n`.filter(e=>e).every((e,_,v)=>e.length>=a&&e.length<=b&&e.length===v[0].length)
function beautifulText(s,l,r,a=[...s].map((e,i)=>e===' '?i+1:''),q=[]){
  if(s.length<=l||z(s.split` `.join`\n`.split``,l,r))return true
  a.push(s.length+1)
  a=a.filter(e=>e!=='')
  for(let i=-1;++i<a.length;)if(a.includes(a[a.length-1]-a[i])&&a.includes(a[i]*2))q.push(a.filter(e=>e%a[i]===0))
  while(q.length)if(z(f([...s],q.shift()),l,r))return true
  return false
}

console.log(beautifulText("Look at this example of a correct text",5,15))
console.log(beautifulText("aa aa aaaaa aaaaa aaaaa",6,11))
console.log(beautifulText("a a a a a a a a",1,10))
console.log(beautifulText("hwfqjv zlr uo umxawql atc qt  mm dwroodjlnj y wv   k q zlgmeydc a kg m cehot pf  mxoxft",5,13))
console.log(beautifulText( "xqu  r tgntxd qifoiy q fuux qeszfm teeh p wjygbz hyuuhv owtpul",6,10))