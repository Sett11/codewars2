splitInteger=(n,p)=>{
  if(n%p===0)return ((n/p)+''+' ').repeat(p).split` `.filter(e=>e).map(Number)
  let a=[],c=~~(n/p)
  while(n){
    n-=c
    a.push(c)
    if(n%(c+1)===0)c++
  }
  return a
}

console.log(splitInteger(20,6))