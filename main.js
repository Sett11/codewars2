function shuffle(a){
  let n=a.length
  for(let i=-1;++i<n;){
    let g=~~(Math.random()*n)
    t=a[g]
    a[g]=a[i]
    a[i]=t
  }
  return a
}

function createTiles(n){
  if(n&1||!n)return []
  let a=Array(n/2).fill(1).map((_,i)=>i+1),b=a.slice(),r=[]
  a=shuffle(a),b=shuffle(b)
  for(let i=-1;++i<n/2;)r.push(a.pop(),b.pop())
  return r
}

console.log(createTiles(8))