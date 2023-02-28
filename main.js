isReoccuring=a=>{
  let arr=[]
  for(let i=0;i<a.length;i++){
    if(arr.includes(a[i])&&arr[arr.length-1]!==a[i])return true
    else arr.push(a[i])
  }return false
}

console.log(isReoccuring([0,0,1,1,2,2,1,1]))
console.log(isReoccuring([0,0,1,1,2,2]))