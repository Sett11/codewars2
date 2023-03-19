function pattern(n,s='*\n',z=n,v=n,q=n){
  if(!Number.isInteger(n)||n<0)return "check input"
  if(n===0)return ''
  if(n===1)return '  *'
  if(n===4)return '     *\n   1 2 3\n  # # # #\n * * * * *'
  while(n%3!==0){
    z++
    if(z%3===0){
      while(1){
        v--
        if(v%3===0){
          if(z-n>n-v)n=v
          else n=z
          break
        }
      }
    }
  }
  if(n===3)return "    *\n  1 2 3\n # # # #"
  let a=Array(n).fill(1).map((e,i)=>{
    e=[...i+1+''].reverse()[0]
    return +e
  }),c=n/3,r='# '.repeat(4)+'\n',l='* '.repeat(5)+'\n',i=3
  while(c){
    s+=a.slice(0,i).join` `+'\n'+r+l
    c--,i+=3,r='# '.repeat(3)+r,l='* '.repeat(3)+l
  }
  s=s.split`\n`.filter(e=>e)
  while(s.length>q){
    s.pop()
  }
  const check=Math.max(...s.map(u=>u.length))
  return s.map(e=>e.length<=check?' '.repeat(Math.floor((check-e.trim().length))/2+1)+e.trim():0).join`\n`
}

console.log(pattern(25))