function split(a){
  return [a.flat(),a.map(e=>[e.length])]
}

function join(a1,a2,z=[]){
 for(let i=0;i<a2.length;i++){
  z.push(a1.splice(0,a2[i]))
 }
 return z
}

console.log(join( [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
],
[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]))