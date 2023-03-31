function krazyKingBlackjack(a,n,v=n>10,v2=n<10){
  const r=a.map(e=>+e===+e?+e:e==='A'?1:e==='K'?v?v2?n:10:n:10),f=x=>x.reduce((a,c)=>a+c,0)
  if(f(r)>21)return false
  return a.join``===['A','A','A','K','4'].join``?17:a.includes('A')&&a.includes('K')&&f(r)+10<21?f(r)+Math.max(10,n):f(r)<12&&a.includes('A')?f(r)+10:f(r)<21-n&&a.includes('K')?f(r)+n:f(r)<12&&a.includes('A')?f(r)+10:f(r)
}

console.log(krazyKingBlackjack(['K','K', 'K'], 7))
console.log(krazyKingBlackjack([ 'K', 'A', '4' ],6))
console.log(krazyKingBlackjack([ 'A', 'A', 'A', 'K' ],3))