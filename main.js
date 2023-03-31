const checkVin=v=>{
  if(v.replace(/[A-Z0-9]/g,'').length||v.length!==17)return false
  const a=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2]
  const o={'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'J':1,'K':2,'L':3,'M':4,'N':5,'P':7,'R':9,'S':2,'T':3,'U':4,'V':5,'W':6,'X':7,'Y':8,'Z':9}
  const c=[...v].map((e,i)=>o[e]?o[e]*a[i]:e*a[i]).reduce((a,c)=>a+c,0)%11
  return c===10&&v[8]==='X'||+v[8]===c
}

console.log(checkVin('5YJ3E1EAXHF000347'))