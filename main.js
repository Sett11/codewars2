function tops(s,a=[]){
  for(let i=1,j=2;i<s.length;i+=j*2+1,j+=2)a.push(s[i])
  return a.reverse().join``
}

console.log(tops('abcdefghijklmnopqrstuvwxyz12345'))