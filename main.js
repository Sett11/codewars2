function splitAllEvenNumbers(numbers, way){
  return numbers.map(el=>{
    if(el%2===0&&way===0){
      let tmp = el/2
      tmp = tmp%2===0?tmp-1:tmp
      el = [tmp, el-tmp]
      return el
    }
    if(el%2===0&&way===1){
      el = [el-(el-1), el-1]
      return el
    }
    if(el%2===0&&way===2){
      let ul = el
      let tmp = el/2
      if(tmp%2!==0){
        el = [tmp, tmp]
        return el
      }
      for(let i = el/2-1; i > 0; i--){
        if(el%i===0&&i%2!==0){
          el = [i,i]
          if(el.reduce((a,c)=>a+c)===ul){
            return el
          }
          if(el.reduce((a,c)=>a+c)!==ul){
              while(el.reduce((a,c)=>a+c)!==ul){
                el.push(i)
              }
          }
        }
      }
      return el
    }
    if(el%2===0&&way===3){
      let arr = [1,1]
       while(arr.reduce((a,c)=>a+c)!==el){
        arr.push(1)
       }
       el = arr
       return el
    }
    return el
  }).flat()
}
console.log(splitAllEvenNumbers([ 1, 10, 1, 3 ], 0))