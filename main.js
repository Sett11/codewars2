function recycle(array) {
    const arr = Array(4).fill(array)
    return arr.map((el,i)=>{
        if(i===0){
            return el.filter(el=>el.material==='paper'||el.secondMaterial==='paper').map(el=>el.type)
        }
        if(i===1){
            return el.filter(el=>el.material==='glass'||el.secondMaterial==='glass').map(el=>el.type)
        }
        if(i===2){
            return el.filter(el=>el.material==='organic'||el.secondMaterial==='organic').map(el=>el.type)
        }
        if(i===3){
            return el.filter(el=>el.material==='plastic'||el.secondMaterial==='plastic').map(el=>el.type)
        }
    })
}
  console.log(recycle([
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
  ]))