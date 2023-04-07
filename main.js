function waveSort(a){
  for(let i=0;i<a.length;i++){
    if(i%2===0){
      for(let j=i+1;j<a.length;j++){
        if(a[j]>=a[i]){
          let t=a[i]
          a[i]=a[j]
          a[j]=t
          break
        }
      }
    }
    if(i%2!==0){
      for(let j=i+1;j<a.length;j++){
        if(a[j]<=a[i]){
          let t=a[i]
          a[i]=a[j]
          a[j]=t
          break
        }
      }
    }
  }
  return a
}

console.log(waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]))