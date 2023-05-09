function sameMark(s,a,c=[...s].map((e,i)=>[e,i]).filter(e=>!e[0].match(/[a-z]/i))){
 return a.map(e=>{
  for(let i=0;i<c.length;i++)e=e.slice(0,c[i][1])+c[i][0]+e.slice(c[i][1])
  return e
 })
}
console.log(sameMark("A-li--Bab---a",["JohnSmith","MichaelJackson","JamesBond"]))