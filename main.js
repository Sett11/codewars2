function insertAtIndexes(p,w,g,z=0){
  for(let i=0;i<g.length;i++){
    if(i===0){
      p=p.slice(0,g[i])+w+p.slice(g[i])
      z+=w.length
    }
    if(i!==0){
      p=p.slice(0,g[i]+z)+w+p.slice(g[i]+z)
      z+=w.length
    }
    }
  return p
}
console.log(insertAtIndexes("I like codewars! It makes me happy."," really",[1,28]))
console.log(insertAtIndexes("'I' write a wi said Phi","ll",[3,14,24]))