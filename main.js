function firstToLast(s,c){
  let i=s.indexOf(c)
  return i==-1?-1:s.lastIndexOf(c)-i
}