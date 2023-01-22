function countSel(lst) {
  let len = lst.length, counter = [...new Set(lst)].length, unic = 0, tmp =
  lst.map((el,i,arr)=>{
    if(arr.indexOf(el)===arr.lastIndexOf(el)){
      unic+=1
    }
  })
  const res = Object.entries(lst.reduce((acc,curr)=>{
    acc[curr] = (acc[curr]||0)+1
    return acc
  }, {})).map(el=>{
    el[0] = Number(el[0])
    return el
  }).sort((a,b)=>b[1]-a[1])
  for(let i = 1; i < res.length; i++){
     tmp = res[0][1]
    if(res[i][1]!==tmp){
      res[i] = '&'
    }else{
      continue
    }
  }
  const finRes = res.filter(el=>el!=='&').map(el=>el[0]).sort((a,b) => a - b)
  return [len, counter, unic, [finRes, tmp]]
}
console.log(countSel([5, -1, 1, -1, -2, 5, 0, -2, -5, 3]))