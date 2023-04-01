function sierpinski(n,a=[]) {
  if(!n)return 'L'
  let c=`L\nL L`.split`\n`,l=c.length,z=0
 while(n-1){
  for(let i=0;i<l;i++){
    if(!z){
      c.push(c[i]+' '.repeat(l+1)+c[i])
    }
    else{
      if(!i)c.push(c[i]+' '.repeat(c[c.length-1].length)+c[i])
      else c.push(c[i]+' '.repeat(c[c.length-i-1].length-c[i].length+1)+c[i])
      
    }
  }
  n--;z++;l=c.length;c[c.length-1]=c[c.length-1].replace(/\s+/g,' ')
 }
  return c.join`\n`
}

console.log(sierpinski(4))