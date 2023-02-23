function arrayOperations(a, k) {
  if(k<1)return a
  if(k%2!==0)k=1
  if(k%2===0)k=2
  while(k){a=a.map((e,i,arr)=>Math.max(...arr)-e);k--}return a
 }
 console.log(arrayOperations([-4, 0, -1, 0],223))