function magicSquare(a,b=[],c=[],z=2){
  if(!a||a.flat().some(e=>!e)||!a.length)return false
  while(z){
    for(let i=0;i<a.length;i++){
      let innerArr=[]
      for(let j=0;j<a.length;j++){
        if(z===2)innerArr.push(a[j][i])
        if(i==j)c.push(a[i][j])
      }
      b.push(innerArr),innerArr=[]
    }
   if(z===2)a=a.map(e=>e.reverse())
    z--
  }
  return [c.slice(0,a.length)].concat([c.slice(a.length)]).concat(b).filter(e=>e.length).concat(a).map(e=>e.reduce((a,c)=>a+c,0)).every((e,i,v)=>e===v[0]&&v[0]!==0)
}
console.log(magicSquare([
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
]))