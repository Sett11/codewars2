function findPair(arr1,arr2){
  const arr = []
  for(let i = 0; i < arr1.length; i++){
    arr.push([arr1[i],arr2[i]])
  }
  const res = arr.map((el,i)=>[el, el.reduce((acc,curr)=>acc+curr,0), i])
  const counter = Object.entries(res.map(el=>el[1]).reduce((acc,curr)=>{
    acc[curr] = (acc[curr]||0) + 1
    return acc
  }, {})).map(el=>{
    el[0] = Number(el[0])
    return el
  }).sort((a,b)=>b[1]-a[1]||b[0]-a[0])[0][0]
  const finRes = res.filter(el=>el[1]===counter).map(el=>el[0])
  return finRes.length < 2 ? [] : finRes
}
console.log(findPair([1,2,3,0,5,-2],[-1,2,-3,4,-5,6]))