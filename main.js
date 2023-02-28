function isMagical(x,a=[],b=[],c=[],z=2){
  if([...new Set(x)].length!==x.length)return false
  a[0]=x.slice(0,3),a[1]=x.slice(3,6),a[2]=x.slice(6)
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
  return [c.slice(0,a.length)].concat([c.slice(a.length)]).concat(b).filter(e=>e.length).concat(a).map(e=>e.reduce((a,c)=>a+c,0)).every(e=>e===15)
}
console.log(isMagical([4, 9, 2, 3, 5, 7, 8, 1, 6]))