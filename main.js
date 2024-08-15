function findUnique(a){
  let u={},n=c=0
  for(let i=-1;++i<a.length;){
    if(!(a[i] in u)){
      u[a[i]]='&'
      n+=a[i]*2
    }
    c+=a[i]
  }
  return n-c
}

console.log(findUnique([ 2,3, 5, 5, 4, 3, 2, 9 ,4]))