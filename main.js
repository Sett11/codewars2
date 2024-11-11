const solveIt=arr=>{
  let n=arr.length,m=arr[0].length,b=arr[0].map((e,i)=>[arr.map((u,j)=>u[i]),i]),a=arr.map((e,i)=>[e,i])
  const f=(a,x)=>a.filter(e=>e[0].slice(0,x-1).reduce((a,c)=>a+c,0)!==e[0][x-1]).map(e=>e[1])[0]
  let [x,y]=[f(a,m),f(b,n)]
  if(x===n-1)return b[y][0].slice(0,m-1).reduce((a,c)=>a+c,0)
  if(y===m-1)return a[x][0].slice(0,n-1).reduce((a,c)=>a+c,0)
  if(!y)return a[x][0][n-1]-a[x][0].slice(1,n-1).reduce((a,c)=>a+c,0)
  if(!x)return b[y][0][m-1]-b[y][0].slice(1,m-1).reduce((a,c)=>a+c,0)
  return a[x][0][m-1]-a[x][0].slice(0,m-1).reduce((a,c,i)=>a+(i!==y?c:0))
}


console.log(solveIt([
  [33,38,15,86],
  [26,7,10,31],
  [37,50,49,136],
  [84,95,74,253]] ))
console.log(solveIt([
  [6,18,44,62],
  [28,13,8,49],
  [13,10,41,64],
  [47,41,87,175]] ))
console.log(solveIt([
  [1 ,2 ,3 ,6 ],
  [4 ,5 ,6 ,15],
  [7 ,10 ,9 ,24],
  [12,15,18,45]
  ]))
console.log(solveIt([
  [1 ,2 ,3 ,7 ],
  [4 ,5 ,6 ,15],
  [7 ,8 ,9 ,24],
  [12,15,18,45]
  ]  ))
console.log(solveIt([
  [1 ,2 ,3 ,6 ],
  [4 ,5 ,6 ,15],
  [7 ,8 ,9 ,24],
  [12,15,18,46]
  ]))