const f=(w,c,r=[])=>{
  [n,m]=[w.length,w[0].length]
  while(c){
    for(let i=0;i<n;i++){
      let c=i,inArr=[],j=0
      while(j<m&&c>=0){
        inArr.push(w[c][j])
        c-=1
        j+=1
      }
      r.push(inArr.reverse())
      inArr=[]
    }
    c--
    w=w.map(e=>e.reverse()).reverse()
  }
  r.pop()
  return r
}

const s=x=>x.reduce((a,c)=>a+c.reduce((x,y)=>x*y,1),0)

function sumProdDiags(a){
  const one=f(a,2),two=f(a.map(e=>e.reverse()),2)
  return s(two)-s(one)
}

console.log(sumProdDiags([
  [ 1,  4, 7,  6,  5],
  [-3,  2, 8,  1,  3],
  [ 6,  2, 9,  7, -4],
  [ 1, -2, 4, -2,  6],
  [ 3,  2, 2, -4,  7]]))