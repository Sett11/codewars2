howManySmaller=(arr,n)=>arr.reduce((a,c)=>a+(c.toFixed(2)<n),0)

console.log(howManySmaller([1.234,1.235,1.228],1.24))