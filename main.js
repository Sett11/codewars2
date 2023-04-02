function phoneWords(s){
  if(!s||[...new Set(s)].length===1&&s[0]==='1')return ''
  if([...new Set(s)].length===1&&s[0]==='0')return ' '.repeat(s.length)
  const a={2:['a','b','c'],3:['d','e','f'],4:['g','h','i'],5:['j','k','l'],6:['m','n','o'],7:['p','q','r','s'],8:['t','u','v'],9:['w','x','y','z'],0:[' ']}
  s=s.replace(/1/g,' ').replace(/((\d)\2*)/g,e=>e[0]+e.length).match(/\d{2,2}/g).map(e=>[...e])
  for(let i=0;i<s.length;i++){
    if(a[s[i][0]].length<s[i][1]){
      let t=s[i][1]
      s[i][1]=a[s[i][0]].length
      t-=s[i][1]
      s=s.slice(0,i+1).concat([[s[i][0],t]]).concat(s.slice(i+1))
    }
  }
  return s.map(e=>a[e[0]][e[1]-1]).join``
}

console.log(phoneWords("222555866363355855999559922208999333333333335566882"))