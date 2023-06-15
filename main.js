function arrangeSeats(a,r=x=>x.sort((a,b)=>a.height-b.height||a.name.localeCompare(b.name)),m=[],f=[],q=[],c=1){
  a.forEach(e=>e.sex==='M'?m.push(e):f.push(e))
  r(m),r(f)
  while(m.length){
    let o={desk:c++,seat1:m.shift().name,seat2:f.shift().name}
    q.push(o)
  }
  return q
}

console.log(arrangeSeats([{name:"John",height:170,sex:"M"},{name:"Tom",height:175,sex:"M"},{name:"Jack",height:180,sex:"M"},{name:"Jone",height:175,sex:"F"},{name:"Anne",height:175,sex:"F"},{name:"Alice",height:178,sex:"F"}]))