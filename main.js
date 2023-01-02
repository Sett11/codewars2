function alphabetWar(f){
   const left = f.split``.map(el => {
    return el === 'w' ? 4 : el === 'p' ? 3 :
    el === 'b' ? 2 : el === 's' ? 1 : 0
   }).reduce((acc,curr) => acc+curr,0)
   const right = f.split``.map(el => {
    return el === 'm' ? 4 : el === 'q' ? 3 :
    el === 'd' ? 2 : el === 'z' ? 1 : 0
   }).reduce((acc,curr) => acc+curr,0)
   return left > right ? "Left side wins!" :
    right > left ? "Right side wins!" : "Let's fight again!"
}
console.log(alphabetWar("zdqmwpbs"))