function compoundArray(a, b) {
    arr=[]
    for(i=0;i<Math.max(a.length,b.length);i++){
    arr.push(a[i])
      arr.push(b[i])
    }
    return arr.filter(el=>el!==undefined)
  }