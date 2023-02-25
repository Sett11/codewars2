function pattern(n){
  let arr=[],s='',c=1
  while(arr.length<=n-1){arr.push(c);c++;s+=(arr[arr.length-1]+'').repeat(arr[arr.length-1])+'\n'}
  return s.slice(0,s.length-1)
 }
console.log(pattern(5))