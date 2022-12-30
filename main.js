const Harshad = ( function() {
    'use strict';
  
    return {
      
      isValid: function( number ) {
       return number % (String(number).split('').reduce((acc,curr) => acc+curr*1, 0)) === 0
      },
     
      getNext: function( number ) {
       for(let i = number+1; ;i++){
        if(i % (String(i).split('').reduce((acc,curr) => acc+curr*1, 0)) === 0){
            return i
        }
       }
      },
     
      getSerie: function( count, start ) {
        const arr = []
   for(let i = start + 1 || 0; ; i++ ){
        if(i % (String(i).split('').reduce((acc,curr) => acc+curr*1, 0)) === 0){
            arr.push(i)
        }
     if(arr.length === count){
       break
     }
    }
    return arr
      }
    };
  
  } () );