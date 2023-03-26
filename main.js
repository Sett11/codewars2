function missingTerm(n,l,a=[]) {
  while(1){
    let t=a.reduce((a,c)=>a+c,0)
    if(t>l)return t-l
    a.push(n)
    n++
  }
}

console.log(missingTerm(1,4))