function unique(a,k){
  return a.map((e,j,v)=>{
    for(let i=0;i<v.length;i++){
      if(i!==j&&k.every(u=>e[u]===v[i][u]))v[i]=0
    }
    return e
  }).filter(e=>e)
}

console.log(unique([
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 1, z: 1 },
  { x: 1, y: 1, z: 3 },
],['x','y']))