function Movie(name,start,end) {
  this.name = name;
  this.start = start;
  this.end = end;
}

function schedule(m,c=0){
  m=m.map(e=>[e.start,e.end]).sort((a,b)=>a[0]-b[0]||a[1]-b[1])
  for(let i=-1;++i<m.length-1;)if(m[i][1]<m[i+1][0])c++
  return c+1
}

console.log(schedule([{"name":"C","start":66,"end":132},{"name":"C++","start":42,"end":84},{"name":"C#","start":98,"end":196}]))
console.log(schedule([new Movie('Java Joe',0,50), 
new Movie('Looking for Clojure',1,5),
new Movie('I C you',6,10),
new Movie('Ruby Park',11,14)]))