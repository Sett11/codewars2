function f(s,e,n,r){
  for(let i=s;i<e;i++){
    n.push(i)
    f(i+1,e,n,r)
    if(0<n.length<e&&n.length%2==0)r.push(n.slice())
      n.pop()
  }
  return
}

function pairEmUp(n){
  let r=[]
  f(0,n,[],r)
  return r
}

console.log(pairEmUp(4))