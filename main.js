function linkedSort(a,b,c,w=a.slice(),q=c?a.sort(c):a.sort(),r=[]){
  z=b.map((e,i)=>[e,w[i]])
  q.forEach(e=>z.forEach(u=>u[1]===e?r.push(u[0]):0))
  b.splice(0,z.length,...[...new Set(r)])
  return a
}

console.log(linkedSort([1,6,5,0],['house', 'car','pen','jeans'],(a,b)=>a-b))