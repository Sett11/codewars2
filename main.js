function findUnique(a){
  const r1=a.filter((e,i,v)=>v.indexOf(e)===v.lastIndexOf(e)),c1=a.filter(e=>Number.isInteger(e)),r2=a.filter(e=>!Number.isInteger(e)),r3=a.filter(e=>e>0),r4=a.filter(e=>e<0),r5=a.filter(e=>e%2===0),r6=a.filter(e=>e%2!==0)
 return c1.length===1?c1[0]:r1.length===1?r1[0]:r2.length===1?r2[0]:r3.length===1?r3[0]:r4.length===1?r4[0]:r5.length===1?r5[0]:r6.length===1?r6[0]:0
}

console.log(findUnique([2,4,6,8,9]))
console.log(findUnique([-2,-4,-6.6,8]))
console.log(findUnique([2,-4,6,8]))
console.log(findUnique( [-33.68,-66.25,-78.44,-62,-75.46,-88.62,-40.19,-37.81,-67.71,-38.65,-8.53,-77.21,51.18,-79.16]))
console.log(findUnique([53,27,51,31,27,27,57,13,54,69,99,31,31,75,89,5,91,47,59,99,25,19,15,93,7,5,-75,37,25] ))