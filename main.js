function combineStrings(...a){
  a=a.map(e=>[...e])
  return !a.length?'':a[a.map((e,i)=>[e,i]).sort((a,b)=>b[0].length-a[0].length)[0][1]].map((e,i)=>a.map(u=>u[i]).join``).join``
}

console.log(combineStrings())