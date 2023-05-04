function eliminateLonely(s){
  const o={
    '{':'{}',
    '}':'{}',
    '[':'[]',
    ']':'[]',
    '<':'<>',
    '>':'<>',
    'b':'bd',
    'd':'bd',
    'p':'pq',
    'q':'pq',
    '(':'()',
    ')':'()',
    'e':'e9',
    '9':'e9',
    '\\':'\\/',
    '\/':'\\/',
    'n':'m',
    'v':'w',
    'V':'W',
    'o':'8',
    '3':'8'
  }
  return [...s].map((e,i,v)=>{
    if(e.match(/[Wwm8]/))return e
    if(e===v[i+1]&&!o[e]||e===v[i-1]&&!o[e]||[e+v[i+1],v[i-1]+e].some(u=>Object.values(o).includes(u)))return e
    if(o[e])return o[e]
    return e+e
  }).join``
 }
 console.log(eliminateLonely("1A3uT6C{jb-\\/"))
 console.log(eliminateLonely('eliminateLonely'))
 console.log(eliminateLonely("][_Jy-A][[]8" ))