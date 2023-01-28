function findIndexOfSubArray(arr) {
  console.log(arr)
  if(arr.length===0||arr.join``==='00'||arr.slice().join``===arr.slice().sort((a,b)=>a-b).join``||arr.slice().join``===arr.slice().sort((a,b)=>b-a).join``)return [0,0]
  const res = []
  for(let i = 0; i <= arr.length; i++){
    const innerArr = []
    let tmp = arr.slice(0,i).sort((a,b)=>a-b), dmb = arr.slice(0,i).sort((a,b)=>b-a)
    if((tmp.concat(arr.slice(i))).join``===(arr.slice().sort((a,b)=>a-b)).join``){
      innerArr.push(i-1)
    }
    if((dmb.concat(arr.slice(i))).join``===(arr.slice().sort((a,b)=>b-a)).join``){
      innerArr.push(i-1)
    }
    if((arr.slice(0,i).concat(arr.slice(i).sort((a,b)=>a-b))).join``===(arr.slice().sort((a,b)=>a-b)).join``){
      innerArr.unshift([i])
    }
    if((arr.slice(0,i).concat(arr.slice(i).sort((a,b)=>b-a))).join``===(arr.slice().sort((a,b)=>b-a)).join``){
      innerArr.unshift([i])
    }
    res.push(...innerArr)
  }
  const finRes = []
  for(let i = 0; i < res.length; i++){
    if(typeof res[i] === 'object' && typeof res[i+1] === 'number'){
      finRes.push([...res[i], res[i+1]])
      break
    }
  }
  return finRes[0]
}


console.log(findIndexOfSubArray([1,2,3,6,4,4]))
 console.log(findIndexOfSubArray([9, 2, 32, 123, 3, 2, 2]))
 console.log(findIndexOfSubArray([1, 2, 323, 45656, 2, 2, 345, 6, 2, 2]))
 console.log(findIndexOfSubArray([1,2,3,4,5,9,8,7,6,10]))