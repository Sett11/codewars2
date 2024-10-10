function deriv(f){
  const dx=.0001
  return x=>(f(x+dx)-f(x))/dx
}