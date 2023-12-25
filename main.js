function hasPair(a,n){
  s=new Set(a)
  for(let i=-1;++i<a.length;)if(s.has(n-a[i])&&a[i]!==n-a[i])return true
  return false
}

console.log(hasPair([1,5,6,9,10,14,16,20,27,30],36))