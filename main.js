function solve(a,b=[]){
  a=a.map(e=>[...e])
  for(let i=0;i<a.length;i++){
    let c=[]
    for(let j=i+1;j<a.length;j++){
      c.push(i)
      if(a[i].length&&a[j].length&&a[i].every(e=>a[j].includes(e))&&a[j].every(e=>a[i].includes(e))){
        c.push(j)
        a[j]=[]
      }
    }
    if([...new Set(c)].length>1){
      b.push([...new Set(c)])
       c=[]
    }
    c=[]
  }
  return b.map(e=>e.reduce((a,c)=>a+c,0)).sort((a,b)=>a-b)
}

console.log(solve(["abc","abbc","ab","xyz","xy","zzyx"]))
console.log(solve(["wkskkkkkk","fokoo","wkskk","uizzzz","fokooff","wkskkkk","uizzzzzzz"]))
console.log(solve(['ayqqqq','epqqqqqqq','epqqqqqqqqqq','rdsddss','ayqqqqqqq','epqqqq','rdsdd']))