numberToPrice=(...z)=>{
  let n=z+'',s=''
  if(z.length>1||typeof z[0]!=='number')return 'NaN'
  if(!n.match(/\./))n+='.00'
  if(n.slice(n.indexOf('.')+1).length<2)n+='0'
  if(n[0]==='-')s='-',n=n.slice(1)
  let a=n.slice(0,n.indexOf('.')),b=n.slice(n.indexOf('.')+1)
  b=b.slice(0,2)
  a=[...a].reverse().join``,r=[]
  for(let i=0;i<a.length;i+=3)r.push(a.slice(i,i+3))
  return s+[...r.join`,`].reverse().join``+'.'+b
}

console.log(numberToPrice(13253.5123))
console.log(numberToPrice(-13253.5123))
console.log(numberToPrice(13253))
console.log(numberToPrice(13253.1))
console.log(numberToPrice(1000000.5))
console.log(numberToPrice(5.1,2))