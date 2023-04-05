function menStillStanding(c,i=0) {
  let a=['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11'].map(e=>[e,0]),b=['B1',  'B2',  'B3','B4',  'B5',  'B6','B7',  'B8',  'B9','B10', 'B11'].map(e=>[e,0])
  c=c.map(e=>e.replace(/Y|R/,u=>u==='Y'?1:2)),f=x=>x.filter(e=>e[1]<2)
  while(i<c.length){
    if(a.length<7||b.length<7)return [a.length,b.length]
    for(i=0;i<c.length;i++){
      if(c[i][0]==='A'){
        let t=c[i].slice(0,-1)
        a=f(a.map(e=>e[0]===t?[e[0],e[1]+ +c[i].slice(-1)]:e))
        if(a.length<7||b.length<7)return [a.length,b.length]
      }
      if(c[i][0]==='B'){
        let t=c[i].slice(0,-1)
        b=f(b.map(e=>e[0]===t?[e[0],e[1]+ +c[i].slice(-1)]:e))
        if(a.length<7||b.length<7)return [a.length,b.length]
      }
    }
  }
  return [a.length,b.length]
}

console.log(menStillStanding(["A4Y", "A4R"]))