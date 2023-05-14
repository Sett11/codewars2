function getMostProfitFromStockQuotes(a,t=[],s=0){
  for(let i=0;i<a.length;i++){
    if(a[i]!==Math.max(...a.slice(i)))t.push(a[i])
    else{
      t.forEach(e=>s+=a[i]-e)
      t=[]
    }
  }
  return s
}

console.log(getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ]))