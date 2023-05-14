function spiralPermutations(s,a=[s]){
  while(1){
    let t=[...a[a.length-1]],c=''
    while(t.length){
      c+=t.pop()||''
      c+=t.shift()||''
    }
    if(c===s)break
    a.push(c)
  }
  return a
}

console.log(spiralPermutations('ABCDE'))