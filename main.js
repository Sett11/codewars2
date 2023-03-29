const a=["1", "2", "3", "4", "5", "6", "7"],b=["a", "b", "c"]

function exchangeWith(a,b,l=b.length,c=0){
   while(b.length)a.push(b.pop())
   while(c<a.length-l)b.unshift(a.shift())
}

console.log(exchangeWith(a,b))