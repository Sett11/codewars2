trickyDoubles=(x,y=x+'',l=y.length/2)=>y.length&1?x*2:y.slice(l)===y.slice(y.length-l)?+y:x*2

console.log(trickyDoubles(1))
console.log(trickyDoubles(8787))