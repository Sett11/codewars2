function compareIntegers(a, b) {
    if(a.match(/\-/g)&&b.match(/\-/g))return parseFloat(a)>parseFloat(b)?'greater':parseFloat(a)<parseFloat(b)?'less':'equal'
      if(a.length<b.length)a='0'.repeat(b.length-a.length)+a
      if(a.length>b.length)b='0'.repeat(a.length-b.length)+b
      for(let i = 0; i < Math.max(a.length,b.length); i++){
          if(a[i]<b[i])return 'less'
          if(a[i]>b[i])return 'greater'
      }return 'equal'
  }