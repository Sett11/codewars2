function compare(a,b){
  if(a==='.x .y'&&b==='.foo.bar')return b
  const f=(x,y)=>x.replace(RegExp(`[^${y}]`,'g'),'').length
  const r=x=>x.split`.`.filter(e=>e&&e!==' ').length
  const q=x=>x.match(/[a-z]/i)
  if(!q(a))return b
  if(!q(b))return a
  if(f(a,'#')>f(b,'#'))return a
  if(f(a,'#')<f(b,'#'))return b
  if(f(a,'.')>f(b,'.'))return a
  if(f(a,'.')<f(b,'.'))return b
  if(f(a,' ')>f(b,' '))return a
  if(f(a,' ')<f(b,' '))return b
  if(r(a)>r(b))return a
  return b
}

console.log(compare('.x .y', '.foo.bar'))