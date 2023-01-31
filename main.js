function liftingCalc(w){
  if(w<20||(w-20)%2.5!==0)return false
  if(w===20)return []
  w = (w-20)/2
  const arr = [20,15,10,5,2.5,1.25], res = []
  let c = 0, val = true
  while(val){
    if(w>=arr[c]){
    w-=arr[c]
    res.push(arr[c])
    }
    if(w<arr[c]){
      c++
    }
    if(w==0){
      val = false
    }
  }
  return res
}
console.log(liftingCalc(250))