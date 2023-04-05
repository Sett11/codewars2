function cipherText(c,s=c.replace(/[^a-z]/gi,'').toLowerCase(),l=c?s.length:0,a=1,b=1,q=[],r=[]){
  if(!l)return ''
  while(1){if(a*b>=l)break;a++,b++}
  for(let i=0;i<s.length;i+=b)q.push(s.slice(i,i+b))
  q=q.map(e=>e.length<b?e+' '.repeat(b-e.length):e)
  for(let i=0;i<q[0].length;i++){
    let iArr=[]
    for(let j=0;j<q.length;j++)iArr.push(q[j][i])
    r.push(iArr.join``),iArr=[]
  }
  return r.join` `
}

console.log(cipherText('Dolores wouldn\'t have eaten the meal if she had known what it actually was.'))