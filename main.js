function mostFrequentDigitSum(n) {
  const arr=[n],res=[]
  while(!arr.includes(0)){n-=[...(n+'')].map(Number).reduce((a,c)=>a+c,0);arr.push(n)}
  for(let i=0;i<arr.length-1;i++){res.push(Math.abs(arr[i+1]-arr[i]))}
  return +Object.entries(res.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]||+b[0]- +a[0])[0][0]
}
console.log(mostFrequentDigitSum(17))