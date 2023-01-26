function chooseBestSum(t, k, l) {
  const F = (arr,length) => {
    const total = []
    if(length===1){
      total.push(...arr.map(el=>[el]))
    }
    else{
      for(let i = 0; i < arr.length; i++){
        total.push(...F(arr.slice(i+1),length-1).map(el=>[arr[i], ...el]))
      }
    }
    return total
  }
  const arr = F(l,k).map(el=>el.reduce((a,c)=>a+c,0))
  const finRes = [...new Set(arr)].filter(el=>el<=t).sort((a,b)=>b-a)[0]
  return finRes===undefined ? null : finRes
}
console.log(chooseBestSum(230, 4, [
  100,  76, 56,  44,  89,
   73,  68, 56,  64, 123,
 2333, 144, 50, 132, 123,
   34,  89
]))