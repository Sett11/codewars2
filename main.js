Plugboard = function(wires){
  console.log(wires)
  let arr = []
  if(wires===undefined){
    arr = []
  }
  else if([...new Set(wires)].length!==wires.length||wires.length===1||wires.length%2!==0||wires.length>20){
    throw Error("Invalid translation")
  }else{
     if(wires.length!==0){
    wires = wires.split``
  }
   arr = []
  for(let i = 0; i < wires.length; i+=2){
    arr.push(wires.slice(i,i+2))
  }
    }
  return {
     process(wire){
       console.log(wire)
      for(let i = 0; i < arr.length; i++){
        if(wire===arr[i][0]){
          wire = arr[i][1]
          return wire
        }
        if(wire===arr[i][1]){
          wire = arr[i][0]
          return wire
        }
      }
      return wire
    }
  }
}

const R = Plugboard('ABCDEFGHIJKLMNOPQRST')
console.log(R.process('T'))