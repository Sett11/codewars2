function spoonerise(c,s=c.split` `){
  if(s.length<2||s.length>3)return 'No spoons here'
  s=s.map((e,i,v)=>{
    e=[...e]
    if(i===0||i===v.length-1){
      for(let i=0;i<e.length;i++)if(e[i].match(/[aioue]/))e=[e.slice(0,i).join``,e.slice(i).join``]
    }
    return e
  })
  let one=s[s.length-1][0]+s[0][1],two=s[0][0]+s[s.length-1][1]
  s[0]=one,s[s.length-1]=two
  return s.map(e=>typeof e!=='string'?e.join``:e).join` `
}

console.log(spoonerise("pack of lies"))