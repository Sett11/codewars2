function* nextElementGenerator(a){
  let i=0,n=a.length
  while(1)yield a[i++%n]
}