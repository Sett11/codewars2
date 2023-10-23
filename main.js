function bulbMaze(s){
  for(let i=-1;++i<s.length;){
    if(s[i+1]==='x')return false
    s=s.replace(/./g,e=>e=='o'?'x':e=='x'?'o':e)
  }
  return true
}

console.log(bulbMaze("xo oxox"))