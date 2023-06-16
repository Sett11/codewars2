function alg196(n,c=0){
  const f=x=>[...x+''].join``===[...x+''].reverse().join``
  n+=+[...n+''].reverse().join``
  while(!f(n)){
    if(c>=261)return -1
    n+=+[...n+''].reverse().join``,c++
  }
  return n
}

console.log(alg196(196))