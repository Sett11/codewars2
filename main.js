tailAndHead=arr=>arr.reduce((a,c,i,v)=>a*((+((r=(c+''))[r.length-1])+(+(v[i+1]+'')[0]))||1),1)

console.log(tailAndHead([123,456,789,12,34,56,78]))
console.log(tailAndHead([1,2,3,4,5]))