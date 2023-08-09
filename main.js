function iccanobif(n) {
  let a=0,b=1,r=[]
  while(r.length<n){
    [a,b]=[a+b,a]
    r.push(a)
  }
  return r.reverse()
}

console.log(iccanobif(64))