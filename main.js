function hoopGame(n,t,a=[],q=[],c=1){
  while(q.length<t.length){
    if(!(c%3)||!(c%7))q.push(0),c++
    else q.push(c++)
  }
  q.forEach((e,i)=>e!==t[i]?a.push(i%n+1):'')
  return a
}

console.log(hoopGame(3,[1, 2, 0, 4, 4, 6, 0, 7, 0]))