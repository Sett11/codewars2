testit=(arr,k=0)=>+(arr.reduce((a,c)=>a+(c==Math.max(...arr)||c==Math.min(...arr)?0:++k&&c),0)/k).toFixed(2)||0

console.log(testit([6,7,19,15,16]))
console.log(testit([3,8,14,19,3,18,15,7,4,19]))