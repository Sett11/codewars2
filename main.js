function getMostFrequent(a){
  return a.temperature.map(e=>e.map((u,j)=>[u,e.filter(z=>z===u).length,j]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]).filter((a,b,c)=>a[1]===c[0][1]&&a[2]===c[0][2])).map(e=>e[0][0])
}

console.log(getMostFrequent( {
    "temperature": [
      [15,17,19,21,21,21,20,16],
      [16,17,22,22,22,22,20,16],
      [12,17,19,20,20,20,20,18],
      [14,15,19,19,20,22,18,17],
      [15,17,24,24,24,20,20,20]
    ]
  }))