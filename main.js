function geo_mean(m,a){
  const check=(m.length+1)*a,s=m.reduce((a,c)=>a+c,0),r=check-s;m.push(r)
  return m.reduce((a,c)=>a*c)**(1/m.length)
}
console.log(geo_mean([2], 10))