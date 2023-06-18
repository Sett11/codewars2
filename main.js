function squareProduct(m,n=Math.sqrt(m),a=[],r=[]){
  for(let i=0;++i<=Math.sqrt(n);)if(!(n%i))a.push(i,n/i)
  for(let i=-2;(i+=2)<a.length;)r.push([a[i],a[i+1]])
  return r
}

console.log(squareProduct(256))