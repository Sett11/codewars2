numberToMoney=n=>{
  [a,b]=(n+'').split`.`,r=[]
  b=b.slice(0,2).replace(/0+$/g,'')
  a=[...a].reverse()
  for(let i=0;i<a.length;i+=3)r.unshift(a.slice(i,i+3).reverse().join``)
  return r.join`,`+(b?'.'+b:'')
}

console.log(numberToMoney(95876.0095294565))
console.log(numberToMoney(1500.342626))