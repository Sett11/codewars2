function minAndMax(l,d,x,a=[],f=y=>[...y+''].map(Number).reduce((a,c)=>a+c,0)){
  while(1){
    if(f(l)===x)break
    else l++
  }
  while(1){
    if(f(d)===x)break
    else d--
  }
  return [l,d]
}

console.log(minAndMax(123,456,5))