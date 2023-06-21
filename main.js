const f=(x,a,r=[])=>{
  for(let i=-1;++i<a.length;){
    let t=[]
    while(x>=a[i])x-=a[i],t.push(a[i])
    if(t.length)r.push(t)
  }
  return r.map(e=>[e.length,e[0]])
}
function minCoins(a,s=a+'',r=[2,1,.5,.2,.1,.05,.02,.01]){
  if(s.match(/\.£/)||s.match(/£\./)||s.includes('.')&&s[0]==='.'||s.includes('.')&&s[s.length-1]==='.'||s.includes('£')&&s[0]!=='£'||s.includes('p')&&s[s.length-1]!=='p'||s.match(/[^£p\d\.]/)||!s.match(/\d/)||(s.match(/p/g)||'').length>1||(s.match(/£/g)||'').length>1||(s.match(/\./g)||'').length>1)return 'Invalid input - enter a positive amount of money'
  let n=+s.replace(/[^\d\.]/g,''),v=s[0]!=='£'||!Number.isInteger(n)
  if(n<=0)return 'Invalid input - enter a positive amount of money'
  if(v)r=r.map(e=>e*100)
  if(!Number.isInteger(n))n=+(n).toFixed(2)*100
  return f(n,r).map(e=>`${e[0]} ${e[1]>99?'£'+e[1]/100+' coin'+(e[0]<2?'':'s'):!v?'£'+e[1]+' coin'+(e[0]<2?'':'s'):e[1]+'p'+' coin'+(e[0]<2?'':'s')}`).join`, `.split``.reverse().join``.replace(/,/,'dna ').split``.reverse().join``
}

console.log(minCoins('£10'))
console.log(minCoins(187))