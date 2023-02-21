const findUnknowNumber=(x,y,z,c=1)=>c%3===x&&c%5===y&&c%7===z?c:findUnknowNumber(x,y,z,c+=1)
console.log(findUnknowNumber(1,2,3))