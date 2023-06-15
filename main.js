function kaprekar(m,c=0,n=+(m+'').padEnd(4,'0')){
  return new Set(n+'').size===1||c>7?-1:n===6174?c:kaprekar(+[...n+''].map(Number).sort((a,b)=>b-a).join``- +[...n+''].map(Number).sort((a,b)=>a-b).join``,c+1)
}

console.log(kaprekar(12))