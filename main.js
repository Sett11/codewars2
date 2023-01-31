function stepDown(s,w,arr=[]){
  if(w==0)return []
  if(s>=0)arr.push(s)
  if(s<0)return arr.reverse()
  return stepDown(s-w,w,arr)
}
console.log(stepDown(5,7))