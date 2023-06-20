function compute(n,a=[],c=1){
  if(!(n&1)||n<3)return 0
  while(c<n)a.push(c+=2)
  return eval('1+'+ a.map(e=>`(1/${e}**2)`).join`+`)
}

console.log(compute(5))