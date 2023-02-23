function arrayConversion(arr,c=0) {
  let F=(x,y)=>x+y,R=(x,y)=>x*y
    for(let i=0;i<arr.length-1;i++){
      if(c%2===0){
        arr[i]=F(arr[i],arr[i+1])
        arr.splice(i+1,1)
      }
      if(c%2!==0){
        arr[i]=R(arr[i],arr[i+1])
        arr.splice(i+1,1)
      }
    }
  return arr.length===1?arr[0]:arrayConversion(arr,c+1)
}
console.log(arrayConversion([3, 3, 5, 5]))