function avoidObstacles(ar) {
 let arr=[],c=1
 while(c<ar[ar.sort((a,b)=>a-b).length-1]+3){if(!ar.includes(c)&&ar.every(e=>e%c!==0))arr.push(c);c++}
 return Math.min(...arr)
}
console.log(avoidObstacles([1, 4, 10, 6, 2]))