function unusualSort(w,a=[],b=[],c=[]){
  w.forEach(e=>typeof e==='string'&&+e!==+e?a.push(e):typeof e==='string'&&+e===+e?b.push(e):c.push(e))
  return a.sort().concat(c.concat(b).sort())
}

console.log(unusualSort([3,"3","2",2,"2","1",1,"a","b","c"]))
console.log(unusualSort(["a","Z","B"]))
console.log(unusualSort([1,2,3,'1','2','3']))