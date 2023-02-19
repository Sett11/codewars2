function digitDifferenceSort(a) {
  return a.map((e,i)=>{
    let tmp=[...(e+'')].map(Number).sort((a,b)=>b-a)
    return [e,tmp[0]-tmp[tmp.length-1],i]
  }).sort((a,b)=>a[1]-b[1]||b[2]-a[2]).map(e=>e[0])
}
console.log(digitDifferenceSort([13098, 1308, 12398, 52433, 213, 424, 213, 243, 12213, 54234, 99487, 81892, 11111, 97897]))