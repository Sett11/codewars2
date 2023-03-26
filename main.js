function finalAttackValue(x,n){
  const f=(a,b)=>{const r=[];for(let i=1;i<Math.max(a,b);i++){if(a%i===0&&b%i===0)r.push(i)}return Math.max(...r)}
  n.forEach(e=>e<=x?x+=e:x+=f(x,e))
  return x
}

console.log(finalAttackValue(50,[50,105,200]))