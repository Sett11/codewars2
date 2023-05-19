function findX(m,x=[~~(m.length/2),~~(m[0].length/2)],q=[]){
  let [a,b]=x
  while(1){
    let c=m[a][b]
    if(q.includes([c,a,b].join``))return null
    q.push([c,a,b].join``)
    if(c==='X')return [a,b]
    if(c.match('N'))a-=+c.slice(1)
    if(c.match('S'))a+=+c.slice(1)
    if(c.match('W'))b-=+c.slice(1)
    if(c.match('E'))b+=+c.slice(1)
    if(a>=m.length||a<0||b>=m[0].length||b<0)return null
  }
}

console.log(findX([
  ["X", "W3", "E2", "S3", "S4"],
  ["S1", "E1", "N1", "S2", "W1"],
  ["S2", "E1", "N2", "S1", "N3"],
  ["N1", "X", "S2", "E1", "W4"],
  ["X", "E3", "X", "N2", "W4"]
]))
console.log(findX([
  ["X", "W3", "E2", "S3", "S4"],
  ["S1", "E1", "N1", "S2", "W1"],
  ["S2", "E1", "N4", "S1", "N3"],
  ["N1", "X", "S2", "E1", "W4"],
  ["X", "E3", "X", "N2", "W4"]
]))