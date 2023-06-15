function repeatAdjacent(s,f=x=>new Set(x).size,r=[]){
  s=s.replace(/(.)\1+/g,' $& ').split` `.filter(e=>e)
  for(let i=-1;++i<s.length;){
    if(f(s[i])===1&&s[i].length>1){
      for(let j=i;++j<=s.length;){
        if(f(s[j])!==1||s[j].length===1){
          let t=s.slice(i,j)
          if(t.length>1)r.push(t)
          i=j
          break
        }
      }
    }
  }
  return r.length
}

console.log(repeatAdjacent('ccccoodeffffiiighhhhhhhhhhttttttts'))
console.log(repeatAdjacent('ccccoooooooooooooooooooooooddee'))
console.log(repeatAdjacent('gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp'))