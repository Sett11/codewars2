const findUnknowNumber=(a,b,d,x,y,z,c=1)=>{
  while(1){if(c%a===x&&c%b===y&&c%d===z)return c;c++}
}
console.log(findUnknowNumber(3,5,7,1,2,3))