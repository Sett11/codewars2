function fill_gaps(a) {
	for(let i=0;i<a.length;i++){
    if(a[i]!==null){
      for(let j=i+1;j<a.length;j++){
        if(a[j]!==null&&a[j]===a[i]){
          a=a.slice(0,i).concat(a.slice(i,j).map(e=>e===null?a[i]:e)).concat(a.slice(j))
          i=j-1;break
        }
        if(a[j]!==null&&a[j]!==a[i]){
          i=j-1;break
        }
      }
    }
  }
  return a
}

console.log(fill_gaps([1,null,2,2,null,2]))
console.log(fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']))
console.log(fill_gaps([1,null,1,null,1]))