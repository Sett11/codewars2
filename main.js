function ascendDescend(l,n,m,s=''){
    if(n===m)return (n+'').repeat(l).slice(0,l)
    if(m<n||!l)return ''
    while(s.length<l){
        for(let i=n;i<m;i++)s+=i
        for(let i=m;i>n;i--)s+=i
    }
    return s.slice(0,l)
}

  console.log(ascendDescend(5,1,3))
  