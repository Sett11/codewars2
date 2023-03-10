function vowelBack(s){
  const a='abcdefghijklmnopqrstuvwxyz',l='aioue'
   return [...s].map(e=>{
    if(e.match(/[co]/ig))return [e,a.indexOf(e)-1]
    if(e.match(/d/ig))return [e,a.indexOf(e)-3]
    if(e.match(/e/ig))return [e,a.indexOf(e)-4]
    if(l.includes(e)&&!e.match(/[eo]/ig))return [e,a.indexOf(e)-5]
    if(!l.includes(e)&&!e.match(/[dc]/ig))return [e,a.indexOf(e)+9]
 }).map(e=>{
  if(e[1]>25)e[1]-=26
  if(e[1]<0)e[1]=26- -e[1]
  return e
 }).map(e=>{
  if(a[e[1]].match(/[code]/ig)){
    return e[0]
  }
  else{
    return a[e[1]]
  }
 }).join``
}
console.log(vowelBack('testcase'))
console.log(vowelBack('codewars'))
console.log(vowelBack('exampletesthere'))