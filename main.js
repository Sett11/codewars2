function threeInOne(arr){
  arr=arr.slice()
  const res = []
  for(let i = 0; i < arr.length; i+=3){
    res.push(arr.slice(i, i+3))
  }
  return res.map(el=>el.reduce((acc,curr)=>acc+curr,0))
}
console.log(threeInOne([1,3,5,2,4,6,7,7,7]))