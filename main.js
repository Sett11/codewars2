function groupByCommas(n,m=[...n+''].reverse(),a=[]){
  for(let i=0;i<m.length;i+=3){a.push(m.slice(i,i+3).join``)}
  return a.map(e=>[...e].reverse().join``).reverse().join`,`
}
console.log(groupByCommas(35235235))