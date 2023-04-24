function sumOfRegularNumbers(a,r=[]){
  a.push(0)
  for(let i=0;i<a.length;i++){
    let t=a[i+1]-a[i],y=a[i+2]-a[i+1],inArr=[]
    if(t===y){
      for(let j=i;j<a.length-1;j++){
        let x=a[j+1]-a[j]
        inArr.push(a[j])
        if(x!==t){
          i=j-1
          break
        }
      }
    }
    if(inArr.length>2)r.push(inArr.reduce((a,c)=>a+c,0))
    inArr=[]
  }
  return r.reduce((a,c)=>a+c,0)
}
console.log(sumOfRegularNumbers([1, 2, 3, 4, 5]))