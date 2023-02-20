function findMinNum(n,c=1) {
  while(1){
    let innerArr=[]
    for(let i=1;i<c/2+1;i++){
      if(c%i===0)innerArr.push(i)
    }
    if(innerArr.length<n-1)innerArr=[]
    if(innerArr.length===n-1)return c
    c++
  }
}
console.log(findMinNum(10))