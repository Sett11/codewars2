function countInversions(a){
  if(a.length<2)return 0
  let c=0
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){if(a[i]>a[j])c++}
  }return c
}
console.log(countInversions([4, 3, 2, 1]))
console.log(countInversions([2,1,3]))
console.log(countInversions([6,5,4,3,2,1]))