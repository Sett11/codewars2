largestDifference=(a,c=0)=>{
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
      if(a[i]<=a[j])c=Math.max(c,j-i)
    }
  }
  return c
}

console.log(largestDifference([9,4,1,10,3,4,0,-1,-2]))