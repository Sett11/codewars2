function sixColumnEncryption(s,a=[],r=[]){
  for(let i=0;i<s.length;i+=6)a.push(s.slice(i,i+6).replace(/ /g,'.'))
  a=a.map(e=>e+'.'.repeat(6-e.length))
  for(let i=0;i<6;i++){
    let c=''
    for(let j=0;j<a.length;j++)c+=a[j][i]
    r.push(c)
    c=''
  }
  return r.join` `
}

console.log(sixColumnEncryption("Attack at noon or we are done for"))