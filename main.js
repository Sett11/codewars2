function flipNumber(m){
  n=[...m].reverse()
  for(let i=1;i<n.length-1;i++){
    n=n.slice(0,i).concat(n.slice(i).reverse())
  }
  return n.join``
}
console.log(flipNumber('012'))