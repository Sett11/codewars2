function findZeroSumGroups(ar, n){
  console.log(ar,n)
  if(ar.length===0)return "No elements to combine"
  const F = (arr,length) => {
    const total = []
    if(length===1){
      total.push(...arr.map(el=>[el]))
    }else{
      for(let i = 0; i < arr.length; i++){
        total.push(...F(arr.slice(i+1), length-1).map(el=>[arr[i], ...el]))
      }
    }
    return total
  }
  const res = [...new Set(F(ar,n).map(el=>{
    if(el.reduce((a,c)=>a+c,0)===0){
      return el.sort((a,b)=>a-b)
    }
  }))].filter(el=>el!==undefined)
  const finRes = [...new Set(res.map(el=>el.join`,`))].map(el=>el.split`,`.map(Number)).sort((a,b)=>a[0]-b[0]||a[1]-b[1]||a[2]-b[2]||a[3]-b[3])
  .filter(el=>el.length === [...new Set(el)].length)
  return finRes.length===0 ? "No combinations" : finRes.length===1 ? finRes[0] : finRes
}    
console.log(findZeroSumGroups([
  6,  2,  6,   0,  4, -3, -10,
 -3, 10, 10,   0,  6,  2,   6,
  0,  4, -3, -10, -3, 10,  10,
  0
], 2))


'[...new Set(res.map(el=>el.join`,`))].map(el=>el.split`,`.map(Number))'