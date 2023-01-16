const unique = arr => arr.filter((el,i,arr)=>{
 return arr.indexOf(el)==i
})

console.log(unique([1,2,2,3]))