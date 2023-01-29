function dup(s) {
  return s.map(el=>{
    el = el.split``
   for(let i = 0; i < el.length; i++){
    if(el[i]===el[i+1]){
      el.splice(i+1,1)
      i--
    }
   }
   return el.join``
  })
}
console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))