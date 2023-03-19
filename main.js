function diff(s){
  s=s.map((e,i)=>[e,Math.abs(e.split`-`[0]-e.split`-`[1]),i]).sort((a,b)=>b[1]-a[1]||a[2]-b[2])
  return s.every(e=>e[1]===0)?false:s[0][0]
}

console.log(diff(['23-32','32-23','2-6','98-98','100-101']))
console.log(diff(['22-22','56-56']))