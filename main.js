function findDup( arr ){
return arr.filter((el,i,arr)=>arr.indexOf(el)!==arr.lastIndexOf(el))[0]
}
console.log(findDup([1,2,2,3]))