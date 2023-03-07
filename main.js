function blocks(s,a=[],b=[],c=[],r=[],z=0){
  if(z===0){
  s=s.replace(/[a-z]+|[A-Z]+|[0-9]+/g,e=>e.match(/[a-z]/g)?a.push(e):e.match(/[A-Z]+/g)?b.push(e):c.push(e))
  a=a.join``.split``.sort(),b=b.join``.split``.sort(),c=c.join``.split``.map(Number).sort((a,b)=>a-b),t=[a,b,c]
  s=''
  }
  for(let i=0;i<t.length;i++){
    for(let j=0;j<t[i].length;j++){
      if(!r.slice(r.lastIndexOf('-')).includes(t[i][j])){
        r.push(t[i][j])
        t[i][j]='&'
      }
    }
  }
  t=t.map(e=>e.filter(u=>u!=='&'))
  if(t.every(e=>!e.length)){return r.join``}
  else{
    r.push('-')
    return blocks(s,a,b,c,r,z+1)
  }
}
console.log(blocks('hbh420sUUW222IWOxndjn93cdop69NICEep832'))