aroundFib=n=>{
  let a=BigInt(0),b=BigInt(1),c=BigInt(0)
  while(n>0){n--,c=b,b+=a,a=c;}
  let s=a+'',r=Object.entries([...s].reduce((a,c)=>(a[c]=a[c]+1||1,a),{})).map((e,i)=>[e[0],e[1],i]).sort((a,b)=>b[1]-a[1]||a[2]-b[2])[0],v=''
  for(let i=0;i<s.length;i+=25)v=s.slice(i,i+25)
  return `Last chunk ${v}; Max is ${r[1]} for digit ${r[0]}`
}

console.log(aroundFib(666))