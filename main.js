function findDiscounted(p){
  return p=='0 0'?'0':p.split` `.map(Number).map((el,_,arr)=>{
    for(let i = 0; i < arr.length; i++){
      if(arr[i]===el+(el/3)){
        arr[i] = undefined
        return el
      }
    }
  }).filter(el=>el).join` `
}
console.log(findDiscounted("9 9 12 12 12 15 16 20"))
console.log(findDiscounted("15 20 60 75 80 100"))