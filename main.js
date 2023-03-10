vowelShift=(s,n,a=[])=>{
  if(!s)return s
  s=s.split``.map(e=>{
    if(e.match(/a|e|u|i|o/gi)){
      a.push(e)
      return '&'
    }
    return e
  })
  while(n!==0){
    if(n>0){
      a.unshift(a.pop())
      n--
    }
    if(n<0){
      a.push(a.shift())
      n++
    }
  }
  return s.map(e=>e==='&'?a.shift():e).join``
}

console.log(vowelShift("This is a test!", 3))