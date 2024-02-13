function facRecursion(n){
  return n<0?0:n<=1?1:n*facRecursion(n-1)
}
  