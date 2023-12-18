function twoArraysNthElement(a,b,c){
  const n=a.length,m=b.length
  let i=j=0
  let r=[]
  while(i<n&&j<m){
    if(r.length===c+1)return r[r.length-1]
    if(a[i]<=b[j])r.push(a[i++])
    else r.push(b[j++])
  }
  while(i<n){
    if(r.length===c+1)return r[r.length-1]
    r.push(a[i++])
  }
  while(j<m){
    if(r.length===c+1)return r[r.length-1]
    r.push(b[j++])
  }
  return r[r.length-1]
}