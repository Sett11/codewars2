const names = [ 'dog',
  'cat',
  'bat',
  'cock',
  'cow',
  'pig',
  'fox',
  'ant',
  'bird',
  'lion',
  'wolf',
  'deer',
  'bear',
  'frog',
  'hen',
  'mole',
  'duck',
  'goat' ]


function sc(s){
  let a = [...s], q = new Set(a), w = names.filter(e=>[...e].every(u=>q.has(u))).sort((a,b)=>a.length-b.length), g = {}, c = 0
  if(!w.length)return 0
  for(let i=-1;++i<w.length;){
    g[w[i]] = []
    for(let j=i;++j<w.length;)g[w[i]].push(w[j])
  }
  let f = (q, g, i, x)=>{
    let v = true
    while([...i].every(e=>q.match(e))){
        for(let j=-1;++j<i.length;){
            if(q.match(i[j]))q = q.replace(i[j],'')
            else v = false
        }
        if(v)x++
    }
    for(let j of g[i])f(q,g,j,x)
    c = Math.max(c,x)
  }
  for(let i in g)f(s,g,i,0)
  return c
}

console.log(sc('dkfaogeclraicddi'))