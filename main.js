function assembleString(b,a=b.map(e=>[...e])){
  if(!a.length)return ''
  let t=a[0]
  for(let i=1;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
      if(t[j]==='*'&&a[i][j]!=='*')t[j]=a[i][j]
    }
  }
  return t.join``.replace(/\*/g,'#')
}

console.log(assembleString([
  "a*c**",
  "**cd*",
  "a*cd*"
]))