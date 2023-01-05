function sortIt(arr){
  return arr.slice().sort((a,b)=>{
    const first = arr.filter(el=>el===a).length
    const last = arr.filter(el=>el===b).length
    if(first===last){return b-a}
    if(first>last){return 1}
     return -1
  })
}
console.log(sortIt([1,2,3,4,4,5,5,6,6]))