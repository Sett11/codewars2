function howManyIterationsNeeded(n,m=261,c=1){
  const f=x=>[...x+''].join``===[...x+''].reverse().join``,r=x=>x+ +[...x+''].reverse().join``
  n=r(n)
  while(!f(n)){
    if(c>=m)return null
    n=r(n),c++
  }
  return c
}

console.log(howManyIterationsNeeded(12,8))