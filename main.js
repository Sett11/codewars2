var Calculator = {
    average: function() {
      if(arguments.length === 0) return 0
        const arr = []
        for(let i = 0; i < arguments.length; i++){
           arr.push(arguments[i])
        }
        return arr.reduce((acc,curr)=>acc+curr,0) / arr.length
    }
   };