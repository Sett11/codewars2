function longestSequenceIn(s){
  console.log(s)
  if(!s)return 0
  if(s===''||s.replace(/\s/g,'')==='')return 0
  s = s.split` `.map(Number)
  if(s.length===1)return 1
  if(s.length===2||s.length===3&&Math.abs(s[0]- s[1])!==Math.abs(s[1]-s[2]))return 2
  if(s.length===3&&s[1]-s[0]===s[2]-s[1])return 3
  let arr = [], res = [0], finRes = []
  for(let i = 0; i < s.length; i++){
    arr.push(s[i+1]-s[i])
  }
  arr.unshift(0)
  arr.push(0)
  arr = arr.filter(el=>el===el)
  for(let i = 1; i < arr.length; i++){
    if(arr[i]!==arr[i+1]&&arr[i]!==arr[i-1]||arr[i]!==arr[i+1]){
      res.push(i)
    }
  }
  res = res.filter(el=>el===el)
  for(let i = 0; i < res.length; i++){
    finRes.push(res[i+1]-res[i])
  }
  finRes = finRes.filter(el=>el===el)
  return Math.max(...finRes)+1
}
//console.log(longestSequenceIn('10 11 12'))
 console.log(longestSequenceIn('7 8 9 2 5 8 11'))
 console.log(longestSequenceIn('-1 0 1 2 1 0 -1'))
// console.log(longestSequenceIn("1 3 9 15 21 7 8 2 3 4"))
// console.log(longestSequenceIn('0 12 24 36 48 60 72 84 96 108 120 132 0 -13 -26 -39 -52 -65 -78 -91 -104 -117 -130 -143 -156 0 12 24 36 48 60 72 84 96 108 120 132'))

/*if(res.length===1&&res[0]===0){
  let nextArr = []
for(let i = 0; i < s.length; i++){
  nextArr.push([s[i+1]-s[i], i])
}
const r = []
 nextArr.slice(0,nextArr.length-1).forEach((el,i,arr)=>{
  let counter = 0
  for(let i = 0; i < nextArr.length; i++){
    if(el[0]===arr[i][0]){
      counter++
    }
  }
  r.push([el,counter])
})
const ind = r.sort((a,b)=>b[1]-a[1])[0][1]
let newArr = r.filter(el=>el[1]===ind).sort((a,b)=>a[1]-b[1])
for(let i = 0; i < newArr.length-1; i++){
  if(newArr[i+1][0][1] - newArr[i][0][1]!==1){
    newArr[i+1] = '&'
  }
}
newArr = newArr.filter(el=>el!=='&')
return ind+1
}*/