function hamsterMe(c,m,a=[...'abcdefghijklmnopqrstuvwxyz']){
 c=[...new Set(c)].sort(),r=[],g=0
 while(c.length){
  g=a.indexOf(c.shift())
  iArr=[]
  for(let i=g;c[0]!==a[i];i++){
    iArr.push(a.splice(i,1)[0])
    i--
  }
  r.push(iArr),iArr=[]
 }
 if(a.length)r[r.length-1].push(...a)
 m=[...m]
 for(let i=0;i<m.length;i++){
  for(let j=0;j<r.length;j++){
    if(r[j].includes(m[i]))m[i]=r[j][0]+(r[j].indexOf(m[i])+1)
  }
 }
 return m.join``
}

console.log(hamsterMe("hamster", "abcdefghijklmnopqrstuvwxyz"))