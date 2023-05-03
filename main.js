duplicated=(a,k)=>a.filter((e,i,v)=>v.some((u,j)=>i!==j&&k.every(z=>e[z]===u[z])))

console.log(duplicated([
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 1, z: 1 },
  { x: 1, y: 1, z: 3 },
],['x','y']))