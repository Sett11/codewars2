
function scoreTest(str, right, omit, wrong){
  let arr0 = [], arr1 = [], arr2 = []
  for(let i = 0; i < str.length; i++){
    if(str[i]===0){
      arr0.push(str[i])
    }
    if(str[i]===1){
      arr1.push(str[i])
    }
    if(str[i]===2){
      arr2.push(str[i])
    }
  }
  arr0 = arr0.map(el=>el=right).reduce((acc,curr)=>acc+curr,0)
  arr1 = arr1.map(el=>el=omit).reduce((acc,curr)=>acc+curr,0)
  arr2 = arr2.map(el=>el = wrong).reduce((acc,curr)=>acc+curr,0)
  return arr0 + arr1 - arr2
}
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2))