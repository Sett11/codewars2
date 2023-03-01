function f(s,a=[]){
  if([...new Set(s)].length===1)return [s[0],s.length]
  for(let i=1;i<s.length+1;i++){
    for(let j=1;j<s.length/2+1;j++){
      if(s.slice(0,i).repeat(j)===s)a.push([s.slice(0,i),j])
    }
  }return a.sort((a,b)=>b[1]-a[1])[0]
}
console.log(f('abcde'))
console.log(f('aaaaa'))