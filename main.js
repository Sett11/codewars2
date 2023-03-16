function encode(t,k) {
  const a=[...new Set(k+'abcdefghijklmnopqrstuvwxyz')]
  t=[...t].map(e=>[e,[]])
  for(let i=0,c=1;i<t.length;i++,c++){
    if(t[i][0].match(/[a-z0-9]/i)){
      t[i][1].push(c)
    }else{
      c=0
      t[i][1].push(c)
    }
  }
  return t.map(e=>e[0].match(/[a-z]/)?a[(a.indexOf(e[0])+e[1][0])%a.length]:e[0].match(/[A-Z]/)?a[(a.indexOf(e[0].toLowerCase())+e[1][0])%a.length].toUpperCase():e[0]).join``
}

function decode(t,k) {
  const a=[...new Set(k+'abcdefghijklmnopqrstuvwxyz')]
  t=[...t].map(e=>[e,[]])
  for(let i=0,c=1;i<t.length;i++,c++){
    if(t[i][0].match(/[a-z]/i)){
      t[i][1].push(c)
    }else{
      c=0
      t[i][1].push(c)
    }
  }
  return t
  .map(e=>{
    if(e[0].match(/[a-z]/)){
      let r=(a.indexOf(e[0])-(e[1][0]%a.length))
      if(r<0)r=a.length-Math.abs(r)
      return a[r]
    }
    if(e[0].match(/[A-Z]/)){
      let r=(a.indexOf(e[0].toLowerCase())-(e[1][0]%a.length))
      if(r<0)r=a.length-Math.abs(r)
      return a[r].toUpperCase()
    }
    return e[0]
  }).join``
}

console.log(decode("TGBqhkMZxVMOQMMxlNKOOvdTSGmcommxoYa,V","mmpyhi"))