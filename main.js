function primeBefAft(n,c=n+1,x=n-1,a=[],b=[]) {
  const f=x=>{if(x<2)return false;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return x>=2}
  while(1){
    if(f(c)){a.push(c);c++}
    if(f(x)){b.push(x);x--}
    c++,x--
    if(a.length&&b.length)return [b[0],a[0]]
  }
}

console.log(primeBefAft(97))