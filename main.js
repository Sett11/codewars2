redarr=a=>[...new Set(a)].sort().reduce((a,c,i)=>{a[i]=c;return a},{})

console.log(redarr(["BBC1","BBC1","BBC2","MTV"]))