function isOddHeavy(n) {
  if (n.length === 0) return false;
  const arr = [], arr2 = []
  for(let i = 0; i < n.length; i++){
    if(n[i]%2===0){
        arr.push(n[i])
    }
    if(n[i]%2!==0){
        arr2.push(n[i])
    }
  }
  if(arr2.length===0){
    return false
  }
  const res = []
   arr2.map(el=>{
    for(let i = 0; i < arr.length; i++){
        res.push(el>arr[i])
    }
  })
  return res.every(el=>el===true)
}
console.log(isOddHeavy([11,4,9,2,3,10]));
