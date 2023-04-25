function sort(a){
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            let t=a[i]
            a[i]=a[j]
            a[j]=t
        }
    }
  }
  return a
}

console.log(sort(["abc", "adc", "acc"]))