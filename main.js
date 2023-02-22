function primiestNumber(k) {
  const F=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  let arr=[],c=2
  if(k<1||k>=62)return -1
  while(arr.length<k){if(F(c)&&[...(c+'')].map(Number).every(e=>F(e)))arr.push(c);c++}
  return arr[k-1]
 }
console.log(primiestNumber(61))