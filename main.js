function int32ToIp(n,a=[]){
  let r=(n).toString(2);r='0'.repeat(32-r.length)+r
  for(let i=0;i<r.length;i+=8) a.push(r.slice(i,i+8))
  return a.map(e=>parseInt(e,2)).join`.`
}

console.log(int32ToIp(2 ** 32 - 1))