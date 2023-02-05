function pickPeaks(arr){
  const pos=[],peaks=[],obj={}
  for(let i = 1; i < arr.length-1; i++){
    if(arr[i]>arr[i-1]&&arr[i]>arr[i+1]){
      pos.push(i)
      peaks.push(arr[i])
    }
    if(arr[i]>arr[i-1]&&arr[i]===arr[i+1]){
      for(let j = i+1; j < arr.length; j++){
        if(j===arr.length-1||arr[j]<arr[j+1])break
        if(arr[j]>arr[j+1]){
          pos.push(i)
          peaks.push(arr[i])
          i=j
          break
        }
      }
    }
  }
  obj.pos=pos
  obj.peaks=peaks
  return obj
}
console.log(pickPeaks([]))