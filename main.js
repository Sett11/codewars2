function threeAmigos(n) {
 let arr=[]
 for(let i=0;i<n.length-2;i++){
  arr.push([n.slice(i,i+3),i])
 }arr=arr.filter(e=>e[0].every(u=>u%2===0)||e[0].every(u=>u%2!==0))
 return !arr.length?[]:arr.map(e=>[...e,Math.max(...e[0])-Math.min(...e[0])]).sort((a,b)=>a[2]-b[2]||a[1]-b[1])[0][0]||[]
}
console.log(threeAmigos([2, 4, 5, 3, 6, 3, 1, 56, 7, 6, 3, 12]))