max=(d,f=x=>x)=>Math.max(...d.map(e=>f(e)))

console.log(max([{apples:2, bananas: 3},
  {apples:15, bananas: 12},
  {apples:4, bananas: 7}],function(d) { return d.bananas; }))