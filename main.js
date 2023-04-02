function wordsToObject(c,s=c.split` `,a=[]){
  for(let i=0;i<s.length;i+=2)a.push([s[i],s[i+1]])
  return '['+a.map(e=>`{name : '${e[0]}', id : '${e[1]}'}`).join`, `+']'
}

console.log(wordsToObject("red 1 yellow 2 black 3 white 4"))