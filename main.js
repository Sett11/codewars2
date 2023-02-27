generateRange=(n,m,s,a=[])=>n>m?a:a.push(n)&&generateRange(n+s,m,s,a)
  // const arr=[]
  // for(let i=n;i<=m;i+=s)arr.push(i)
  // return arr

console.log(generateRange(2, 10, 2))