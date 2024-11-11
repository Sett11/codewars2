const solveIt=arr=>{
  let n=arr.length,x=y=a=b=-1
  for(let i=-1;++i<n;){
    if(arr[i].slice(0,n-1).reduce((a,c)=>a+c,0)!==arr[i][n-1]){
      x=i
      a=arr[i]
      break
    }
  }
  for(let i=-1;++i<n;){
    let c=0,t=[]
    for(let j=-1;++j<n-1;)c+=arr[j][i],t.push(arr[j][i])
    if(c!==arr[n-1][i]){
      t.push(arr[n-1][i])
      y=i,b=t
      break
    }
  }
  if(x===n-1)return b.slice(0,n-1).reduce((a,c)=>a+c,0)
  if(y===n-1)return a.slice(0,n-1).reduce((a,c)=>a+c,0)
  if(!y)return a[n-1]-a.slice(1,n-1).reduce((a,c)=>a+c,0)
  if(!x)return b[n-1]-b.slice(1,n-1).reduce((a,c)=>a+c,0)
  return a[n-1]-a.slice(0,n-1).reduce((a,c,i)=>a+(i!==y?c:0))
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