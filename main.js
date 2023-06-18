function reversiRow(a,r=Array(8).fill('.')){
  for(let i=-1;++i<a.length;){
    r[a[i]]=i&1?'O':'*'
    let k,t
    for(let j=a[i];++j<r.length;){
      if(r[j]===r[a[i]]){
        k=j
        break
      }
    }
    for(let j=a[i];--j>-1;){
      if(r[j]===r[a[i]]){
        t=j
        break
      }
    }
    if(k!==undefined){
      let x=r.slice(a[i],k+1)
      if(!x.includes('.')&&x[0]===x[x.length-1]&&x.some(e=>e!==x[0])){
        r=r.slice(0,a[i]).concat(x.map(e=>x[0])).concat(r.slice(k+1))
      }
    }
    if(t!==undefined){
      let x=r.slice(t,a[i]+1)
      if(!x.includes('.')&&x[0]===x[x.length-1]&&x.some(e=>e!==x[0])){
        r=r.slice(0,t).concat(x.map(e=>x[0])).concat(r.slice(a[i]+1))
      }
    }
  }
  return r.join``
}

console.log(reversiRow([3,4,5]))
console.log(reversiRow([4,6,7,5]))
console.log(reversiRow([ 3, 2, 7, 1, 0 ]))