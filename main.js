function parse(s,c=0,a=[]){
  for(let i=0;i<s.length;i++){
    if(s[i]==='i')c+=1
    if(s[i]==='d')c-=1
    if(s[i]==='s')c**=2
    if(s[i]==='o')a.push(c)
  }
  return a
}

console.log(parse("iiisxxxdoso"))