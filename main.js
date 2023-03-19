function dot(n,m,a=[]){
  let chank='| '+'o'.repeat(n).split``.join` | `+' |',s=('+'+'-'.repeat(3)+'+').repeat(n).replace(/\+\+/g,'+')+'\n'
  while(m){a.push(chank);m--}
  return s+a.map(e=>e+'\n').join(s)+s.slice(0,s.length-1)
}

console.log(dot(5,10))