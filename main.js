function findMissing(a,r=[]){
  for(let i=1;i<a.length;i++)r.push(a[i]/a[i-1])
  c=+Object.entries(r.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1])[0][0]
  for(let i=0;i<a.length;i++)if(a[i]*c!==a[i+1])return a[i]*c
}

console.log(findMissing([1,4,16,256]))