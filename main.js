function kthDivisor(n,k,a=[],c=1){
  while(c<=~~n/2){
    if(n%c===0){a.push(c,n/c);c++}c++
  }
  return [...new Set(a)].sort((a,b)=>a-b)[k-1]||-1
}

console.log(kthDivisor(16,5))