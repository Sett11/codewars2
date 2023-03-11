longest=(a,n)=>a.map((e,i)=>[e,i]).sort((a,b)=>b[0].length-a[0].length||a[1]-b[1])[n-1][0]

console.log(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4))