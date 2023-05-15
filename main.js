f=(x,y,c=0)=>{for(let i=0;i<x.length;i++){if(x[i]!==y[i])c++}return c}
child=(b1,b2,r=f(b1,b2))=>b1===b2?1===2:r<3
grandchild=(b1,b2,r=f(b1,b2))=>b1.length===1&&b2.length===1&&b1!==b2?1==2:r<=4

console.log(child('BWBWBW','BWBWBB'))
console.log(grandchild('BWBWBB','WWWWBB'))