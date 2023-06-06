function watchPyramidFromTheSide(s,n=-1,r=[]){
  if(!s)return s
  for(let i=s.length;--i>=0;)r.push(s[i].repeat(n+=2))
  return r.map(e=>' '.repeat((n-e.length)/2)+e+' '.repeat((n-e.length)/2)).join`\n`
}
function watchPyramidFromAbove(s){
  if(!s)return s
  let n=s.length*2-1
  let a=s[0].repeat(n*n).match(RegExp(`.{${n},${n}}`,'g')).map(e=>[...e]),c=s.slice(1),k=1
  for(let q=0;q<c.length;q++){
    for(let i=k;i<a.length-k;i++)for(let j=k;j<a[i].length-k;j++)a[i][j]=c[q]
    k++
  }
  return a.map(e=>e.join``).join`\n`
}
function countVisibleCharactersOfThePyramid(s){
  if(!s)return -1
  return watchPyramidFromAbove(s).split`\n`.join``.length
}
function countAllCharactersOfThePyramid(s){
  if(!s)return -1
  let n=s.length*2-1,c=0
  while(n>0)c+=n*n,n-=2
  return c
}

console.log(watchPyramidFromTheSide('*#'))
console.log(watchPyramidFromAbove('*#'))
console.log(countVisibleCharactersOfThePyramid('*#'))
console.log(countAllCharactersOfThePyramid("*#"))