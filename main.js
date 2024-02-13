function isFibo(a,b,f){
  while(a<f)[b,a]=[a+b,b]
  return a==f
}

console.log(isFibo(4,5,23))