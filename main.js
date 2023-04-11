countZeros=n=>Array(n).fill(1).map((e,i)=>i+e).join``.replace(/[^0]/g,'').length


console.log(countZeros(200))