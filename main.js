optimumLocation=(s,l)=>{
  const r=l.map(e=>[e,eval(s.map(u=>(Math.abs(e.x-u[0])+Math.abs(e.y-u[1]))).join`+`)]).sort((a,b)=>a[1]-b[1])[0][0]
  return `The best location is number ${r.id} with the coordinates x = ${r.x} and y = ${r.y}`
}

console.log(optimumLocation([[3,7],[2,2],[14,1]],[{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}]))
console.log(optimumLocation([[152,7],[1,211],[14,56],[12,4],[142,7]], 
[{id: 1, x: 63, y: 55}, {id: 2, x: 55, y: 21},{id: 3, x: 144, y: 12}]))