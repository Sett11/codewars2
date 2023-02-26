function findPattern(a,b=[],c=[]){
  if(a.length===2)return [a[1]-a[0]]
  for(let i=0;i<a.length-1;i++){b.push(a[i+1]-a[i])}
  for(let i=0;i<b.length;i++){
    for(let j=i;j<b.length;j++){
      let tmp=b.slice(i,j),len=Math.floor(b.length/tmp.length)
      if((tmp.concat(tmp)).join``===b.join``||tmp.join``.repeat(len<1||len===Infinity?1:len)===b.join``)c.push(tmp)
    }
  }c=c.sort((a,b)=>a.length-b.length)[0]
  return c?c:b
}
console.log(findPattern([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]))
console.log(findPattern([1, 5, 2, 3, 1, 5, 2, 3, 1]))
console.log(findPattern([1, 2, 3, 4, 5]))
console.log(findPattern([1, 5, 4, 8, 7, 11, 10, 14, 13]))
console.log(findPattern([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))