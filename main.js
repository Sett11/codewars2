function findSubArrayWithSameElement(b,k) {
 if(b.indexOf(k)===b.lastIndexOf(k))return [b.indexOf(k),b.lastIndexOf(k)]
 const arr=[]
 b.push('&')
 for(let i=0;i<b.length-1;i++){
  if(b[i]===k&&b[i+1]!==k)arr.push(i)
  if(b[i]===k&&b[i+1]===k){
    for(let j=i;j<b.length;j++){
      if(b[j]===k)continue
      if(b[j]!==k){
        arr.push([i,j-1])
        i=j+1
      }
    }
  }
 }return arr.every(e=>typeof e==='number')?[Math.max(...arr),Math.max(...arr)]:arr.filter(e=>typeof e==='object'&&e[0]!==e[1]&&e[0]<e[1]).map((e,i)=>[e,e[1]-e[0],i]).sort((a,b)=>b[1]-a[1]||b[2]-a[2])[0][0]
}
console.log(findSubArrayWithSameElement([2, 1, 1, 1, 1, 3, 3, 4, 5, 1, 1, 1],3))
console.log(findSubArrayWithSameElement([1],1))
console.log(findSubArrayWithSameElement([2, 1, 1, 1, 1, 3, 3, 4, 5, 1, 1, 1, 1],1))
console.log(findSubArrayWithSameElement([4,8,6,4,1,1,1,8,6,3,2,3],4))
console.log(findSubArrayWithSameElement( [9,7,9,8,9,6,7,4,4,1,1,7,1,1,4,7,4,3,7,1,7,6,1,1,1,5,1,1,2,9,4,8,5,7,4,5,9,9,9,2,3,3,6,3,6,4,9,3,4,5,9,4,3],1))
console.log(findSubArrayWithSameElement( [3,3,7,5,7,5,4,7,9,7,2,1,5,7,8,1,9,6,4,8,4,5,1,2,2,9,6,7,7,4,3,3,4,6,7,8,1,6,4,1,9,8,8,2,1,3,1,6,7,5,6,2,2,5,2,1,6,1,1,8,3,2,2,5,6,6,1,8,1,7,5,5,5,8,4,4,8,4,9],4))