function furthestDistance(a,k,m=-1){
  for(let i=-1;++i<a.length;)for(let j=a.length;--j>i;)if(Math.abs(a[i]-a[j])>=k)m=Math.max(Math.abs(j-i),m)
  return m
}

console.log(furthestDistance([8,7,1,9],5))
console.log(furthestDistance([1,2,3,4],1))
console.log(furthestDistance([3,4,1,2],2))
console.log(furthestDistance([8,7,1,9],100))