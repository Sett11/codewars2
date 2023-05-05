function reverseNumber(s,m=s[0]==='-'?'-':'',n=s.replace(/\D/g,''),q=''){
 const f=(y,x=[...y].map(Number))=>x.slice().sort((a,b)=>a-b).join``===y||x.slice().sort((a,b)=>b-a).join``===y
 for(let i=0;i<=n.length;i++){
  let t=n.slice(0,i)
  if(i===n.length&&f(t)){
    q+=[...t].reverse().join``
    break
  }
  if(!f(t)){
    q+=[...t.slice(0,-1)].reverse().join``
    n=n.slice(i-1)
    i=0
  }
 }
 while(!+q[0])q=q.slice(1)
 return m+q
}

console.log(reverseNumber('-520025'))
console.log(reverseNumber('-244969809067815868079677501805063264427988149853'))