function span(a,f){
  if(!a.length)return [[],[]]
  for(let i=0;i<a.length;i++)if(!f(a[i]))return [a.slice(0,i),a.slice(i)]
  return [a,[]]
}

console.log(span([13,17,19,11,21],function isEven (x) {
  return Math.abs(x) % 2 !== 0;
}))